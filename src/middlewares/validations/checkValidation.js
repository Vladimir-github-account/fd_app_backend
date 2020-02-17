import {ACTIONS} from "../../constants";

/**
 *
 * @param validationSchema
 *
 */
export default function (validationSchema) {
    return function (action) {
        return async ( req, res, next ) => {
            try {
                req.body = await validationSchema.validateAsync( req.body, {
                    context: {
                        isCreateMode: action === ACTIONS.CREATE,
                    }
                });
                next();
            } catch (e) {
                next(e);
            }
        }
    }
}