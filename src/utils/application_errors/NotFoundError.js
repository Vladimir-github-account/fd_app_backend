import ApplicationError from './ApplicationError.js';

class NotFoundError extends ApplicationError {
  constructor (resourceName) {
    super( `Resouce ${
      resourceName
      ? `"${resourceName}"`
      : ''
    } not found.`, 404 );
  }
}

export default NotFoundError;