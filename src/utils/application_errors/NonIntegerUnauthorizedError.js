import ApplicationError from './ApplicationError.js';

class NonIntegerUnauthorizedError extends ApplicationError {
    constructor () {
        super( 'Non integer value passed', 400 );
    }
}

export default NonIntegerUnauthorizedError;