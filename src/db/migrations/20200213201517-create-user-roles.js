'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('UserRoles', {
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                }
            },
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Roles'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })/*.then( value => {
            return queryInterface.addConstraint( 'UserRoles', ['userId', 'roleId'], {
                type: 'primary key',
            } );
        } )*/;
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('UserRoles');
    }
};