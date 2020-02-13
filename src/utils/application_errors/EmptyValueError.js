import ApplicationError from './ApplicationError.js';

class EmptyValueError extends ApplicationError {
    constructor () {
        super( `Empty value passed`, 400 );
    }
}

export default EmptyValueError;