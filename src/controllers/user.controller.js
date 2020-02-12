const { User } = require('../db/models');

class UserController {
  getUserByPk = async function (req, res, next) {
    try {
      const { params: { userId } } = req;
      const foundedUser = await User.findByPk(userId, {
        attributes: {
          exclude: ['password']
        }
      });
      if (foundedUser) {
        return res.status(200).send(foundedUser);
      }
      next(new Error('user not found'));
    } catch (e) {
      next(e);
    }
  };

  createUser = async function (req, res, next) {
    try {
      const createdUser = await User.create(req.body);
      if (createdUser) {
        const data = createdUser.get();
        delete data.password;
        return res.status(201).send(data);
      }
      next(new Error('Create user error'));
    } catch (e) {
      next(e);
    }
  };

  updateUser = async function (req, res, next) {
    try {
      const { body } = req;
      const { userId } = req.params;
      const [updatedRowsCount, updatedRows] = await User.update(body, {
        where: {
          id : userId
        },
        returning: true
      });
      if (updatedRowsCount) {
        const data = updatedRows[0].get();
        delete data.password;
        return res.send(data);
      }
      next(new Error('Update user error'));
    } catch (e) {
      next(e);
    }
  };

  deleteUser = async function(req, res, next) {
    try {
      const { userId } = req.params;
      const deletedRowCount = await User.destroy({
        where: {
          id : userId
        }
      });
      if (deletedRowCount) {
        return res.send(`${deletedRowCount}`);
      }
      next(new Error('Delete user error'));
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UserController();

