/**
 *
 * @typedef {Symbol} Action
 */

/**
 *
 * @enum {Action} Actions
 */
export const ACTIONS = Object.freeze( {
    /**
     * @readonly
     */
    CREATE:'CREATE' ,
    /**
     * @readonly
     */
    READ:'READ' ,
    /**
     * @readonly
     */
    UPDATE:  'UPDATE' ,
    /**
     * @readonly
     */
    DELETE: 'DELETE' ,
} );

/**
 *
 * @typedef {string} Role
 */

/**
 *
 * @enum {Role} Roles
 */
export const ROLES = Object.freeze( {
    ADMIN: 'ADMIN',
    MODERATOR: 'MODERATOR',
    USER: 'USER',
} );

/**
 * @typedef {Symbol} Entity
 */

/**
 *
 * @enum {Entity} Entities
 */
export const ENTITIES = Object.freeze( {
    ...ROLES,
    TASK: 'TASK',
} );

export const PERMISSIONS_TREE = Object.freeze({
    USER: {
        CREATE: {
            TASK: true,
            USER: false,
        },
        READ: {
            TASK: {
                OWNER: true,
                NOT_OWNER: false,
            },
            USER: {
                SELF: true,
                OTHER: false
            },
        },
        UPDATE: {
            TASK: {
                OWNER: {
                    VALUE: true,
                    IS_DONE: true,
                    DEADLINE: true,
                    USER_ID: false,
                    CREATED_AT: false,
                    UPDATED_AT: false,
                },
                NOT_OWNER: false,
            },
            USER: {
                USER: {
                    SELF: true,
                    OTHER: false,
                },
                ADMIN: false,
            },
        },
        DELETE: {
            TASK: {
                OWNER: true,
                NOT_OWNER: false,
            },
            USER: false,
        },
    },
    ADMIN: {
        CREATE: {
            TASK: true,
            USER: {
                USER: true,
                ADMIN: false
            },
        },
        READ: true,
        UPDATE: {
            TASK: {
                OWNER: true,
                NOT_OWNER: false,
            },
            USER: {
                USER: {
                    SELF: true,
                    OTHER: {
                        FIRST_NAME: false,
                        LAST_NAME: false,
                        LOGIN: true,
                        PASSWORD: false,
                        EMAIL: false,
                    }
                },
                ADMIN: false,
            }
        },
        DELETE: {
            TASK: {
                OWNER: true,
                NOT_OWNER: false,
            },
            USER: {
                USER: true,
                ADMIN: false,
            }
        }
    }
});