import ApplicationError from './ApplicationError.js';

class NonPositiveNumberUnauthorizedError extends ApplicationError {
    constructor () {
        super( 'Non-positive number passed', 400 );
    }
}

export default NonPositiveNumberUnauthorizedError;