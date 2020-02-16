import { ValidationError } from '@hapi/joi';

export default (err, req, res, next) => {
  if ( err instanceof ValidationError ) {
    const { details: [ errorDetails ] } = err;
    const valueLabel = errorDetails.context.label || 'Property';
    switch (errorDetails.type) {
      case 'string.pattern.base':
        switch (errorDetails.context.key) {
          case 'firstName' :
            return res.status( 400 ).send(
                `First name with value \"${errorDetails.context.value}\" fails to match the required pattern. The first name must not be longer than 63 characters and contain at least one capital letter and a small letter` );
          default: {
            return res.status( 400 ).send(
                `${valueLabel} with value \"${errorDetails.context.value}\" fails to match the required pattern.` );
          }
        }
      default: {
        return res.status( 400 ).send( errorDetails.message );
      }
    }
  }
  return next( err );
}