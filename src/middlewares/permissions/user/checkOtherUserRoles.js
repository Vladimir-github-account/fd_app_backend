import AppError from '../../../utils/application_errors';

import { sequelize } from '../../../db/models';

export default async function(req, res, next) {
  try {
    const { userId } = req.params;
    const queryResponse = await sequelize.query(
        `SELECT R.name FROM "Roles" as R JOIN "UserRoles" UR on R.id = UR."roleId" WHERE UR."userId" = ${userId};`,
        { type: sequelize.QueryTypes.SELECT }
    );
    const otherUserRoles = queryResponse.map(
        queryResponse => queryResponse.name );
    if ( otherUserRoles && otherUserRoles.length !== 0 ) {
      req.otherUserRoles = otherUserRoles;
      next();
    } else {
      next( new AppError.NotFoundError( 'roles for other user' ) );
    }
  } catch (e) {
    next( e );
  }
}