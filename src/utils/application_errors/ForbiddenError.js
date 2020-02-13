import ApplicationError from './ApplicationError.js';

class ForbiddenError extends ApplicationError {
  constructor (message = '') {
    super( `The server understood the request, but is refusing to fulfill it. ${message}`, 403 );
  }
}

export default ForbiddenError;