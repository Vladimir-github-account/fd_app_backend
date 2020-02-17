const { Task } = require( '../db/models' );

class TaskController {
  async getTaskByPk(req, res, next) {
    try {
      const { params: { taskId } } = req;
      const foundedTask = await Task.findByPk( taskId, {} );
      if ( foundedTask ) {
        return res.status( 200 ).send( foundedTask );
      }
      next( new Error( 'Task not found' ) );
    } catch (e) {
      next( e );
    }
  };

  async createTask(req, res, next) {
    try {
      const createdTask = await Task.create( req.body );
      if ( createdTask ) {
        return res.status( 201 ).send( createdTask );
      }
      next( new Error( 'Create Task error' ) );
    } catch (e) {
      next( e );
    }
  };

  async updateTask(req, res, next) {
    try {
      const { body } = req;
      const { taskId } = req.params;
      const [ updatedRowsCount, updatedRows ] = await Task.update( body, {
        where: {
          id: taskId,
        },
        returning: true,
      } );
      if ( updatedRowsCount ) {
        return res.send( updatedRows[0] );
      }
      next( new Error( 'Update Task error' ) );
    } catch (e) {
      next( e );
    }
  };

  async deleteTask(req, res, next) {
    try {
      const { taskId } = req.params;
      const deletedRowCount = await Task.destroy( {
        where: {
          id: taskId,
        },
      } );
      if ( deletedRowCount ) {
        return res.send( `${deletedRowCount}` );
      }
      next( new Error( 'Delete Task error' ) );
    } catch (e) {
      next( e );
    }
  }
}

module.exports = new TaskController();

