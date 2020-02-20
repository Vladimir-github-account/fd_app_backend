const {Task} = require('../db/models');
const {Op} = require('sequelize');

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

      const tasks = await Task.findAll({
                                         limit,
                                         offset,
                                         where: {
                                           userId,
                                           isDone,
                                         }
                                       });
      res.send(tasks);
    } catch (e) {
      next(e);
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
      const deletedRowsCount = await Task.destroy({
                                                    where: {
                                                      userId,
                                                      isDone,
                                                      id: ids.split(',')
                                                    }
                                                  });
      if (deletedRowsCount) {
        return res.send({
                          deletedRowsCount,
                        });
      }
      next(new AppError.NotFoundError('Tasks'));

    } catch (e) {
      next(e);
    }
  }
}

module.exports = new TasksController();
