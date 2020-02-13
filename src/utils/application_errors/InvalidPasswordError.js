import ApplicationError from './ApplicationError.js';

class InvalidPasswordError extends ApplicationError {
    constructor () {
        super( 'Invalid password', 403 );
    }
}

export default InvalidPasswordError;