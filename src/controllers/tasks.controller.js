const { Task } = require( '../db/models' );
const { Op } = require( 'sequelize' );

class TasksController {
  async getTasks(req, res, next) {
    try {
      const {
        authorizationData: {
          id: userId,
        },
        query: {
          isDone,
          limit,
          offset,
        }
      } = req;
      const options = {
        where: {
          userId,
        }
      };
      if ( isDone ) {
        options.where.isDone = isDone;
      }
      if ( limit ) {
        options.limit = limit;
      }
      if ( offset ) {
        options.offset = offset;
      }
      const tasks = await Task.findAll( options );
      res.send( tasks );
    } catch (e) {
      next( e );
    }
  }

  async deleteTasks(req, res, next) {
    try {
      const {
        authorizationData: {
          id: userId,
        },
        query: {
          isDone,
          ids
        }
      } = req;
      const options = {
        where: {
          userId,
        }
      };
      if ( isDone ) {
        options.where.isDone = isDone;
      }
      if ( ids ) {
        options.where.id = ids.split( ',' );
      }
      const deletedRowsCount = await Task.destroy( options );
      if ( deletedRowsCount ) {
        return res.send( {
          deletedRowsCount,
        } );
      }
      next( new AppError.NotFoundError( 'Tasks' ) );
    } catch (e) {
      next( e );
    }
  }
}

module.exports = new TasksController();
