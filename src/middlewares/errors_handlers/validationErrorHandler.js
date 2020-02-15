import { ValidationError } from '@hapi/joi';

export default (err, req, res, next) => {
    if (err instanceof ValidationError) {
        const { details: [errorDetails] } = err;
        const valueLabel = errorDetails.context.label || 'Property';
        return res.status( 400 ).send( errorDetails.type === 'string.pattern.base'
            ? `${valueLabel} with value \"${errorDetails.context.value}\" fails to match the required pattern.`
            : errorDetails.message );
    }else{
        return res.send( err )
    }

    //return next( err );
}