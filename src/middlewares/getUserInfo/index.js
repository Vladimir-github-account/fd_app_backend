import AppError from '../../utils/application_errors';

import {sequelize} from '../../db/models';

export default async function (req, res, next) {
    try {
        const { id: userId} = req.authorizationData;
        const queryResponse = await sequelize.query(
            `SELECT R.name, T.id FROM "Roles" as R JOIN  "UserRoles" UR on R.id = UR."roleId" JOIN "Users" U on UR."userId" = U.id JOIN "Tasks" T on U.id = T."userId" WHERE  UR."userId" = ${userId};`,
            {type: sequelize.QueryTypes.SELECT}
        );
        const userInfo = {
            userTasks: [...new Set(queryResponse.map(queryResponse => queryResponse.id))],
            userRoles: [...new Set(queryResponse.map(queryResponse => queryResponse.name))]
        };
        if (userInfo.userRoles && userInfo.userRoles.length !== 0) {
            req.userInfo = userInfo;
            next();
        } else {
            next( new AppError.NotFoundError('roles for this user'));
        }
    } catch (e) {
        next(e);
    }
       
}