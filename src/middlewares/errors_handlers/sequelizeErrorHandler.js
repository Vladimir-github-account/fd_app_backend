import { BaseError } from 'sequelize';

export default (err, req, res, next) => {
  if ( err instanceof BaseError ) {
    res.status( 400 ).send( 'Sequelize error\n', err );
  } else {
    return res.send( err );
  }
  //return next( err );
}