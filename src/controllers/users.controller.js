const {User} = require('../db/models');
const {Op} = require('sequelize');

class UsersController {
  async getUsers(req, res, next) {
    try {
      const {
        limit,
        offset,
      } = req.query;

      const users = await User.findAll({
                                         limit: limit || 20,
                                         offset : offset || 0,
                                         order: [['id', 'ASC']]
                                       });
      res.send(users);
    } catch (e) {
      next(e);
    }
  }

  async deleteUsers(req, res, next) {
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
      const deletedRowsCount = await User.destroy({
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
      next(new AppError.NotFoundError('user'));

    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UsersController();
