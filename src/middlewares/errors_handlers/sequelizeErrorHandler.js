import { BaseError } from 'sequelize';

export default (err, req, res, next) => {
  if ( err instanceof BaseError ) {
    return res.status( 400 ).send( err.errors[0].message );
  } else {
    next( err );
  }
}