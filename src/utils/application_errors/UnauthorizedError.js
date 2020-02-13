import ApplicationError from './ApplicationError.js';

class UnauthorizedError extends ApplicationError {
  constructor () {
    super( 'The request requires user authentication.', 401 );
  }
}

export default UnauthorizedError;