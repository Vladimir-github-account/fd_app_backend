import AppError from '../../utils/application_errors';
import checkPermission from "../../utils/permissions/checkPermission";

export default function (entity) {
    return function (action) {
        return (req, res, next) => {
            try {
                const roles = req.userInfo.userRoles;
                const isOwner = req.userInfo.isOwner;
                const isSelf = req.userInfo.isSelf;
                const query = [];
                query.push(roles, action, entity);
                if (isOwner){
                    query.push(isOwner);
                }
                if (isSelf){
                    query.push(isSelf);
                }
                console.log(query);
                if (checkPermission(query)) {
                    next();
                } else {
                    next(new AppError.ForbiddenError('Permission denied'))
                }
            } catch (e) {
                next(e);
            }
        };
    };
}
