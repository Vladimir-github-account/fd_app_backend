import { User } from '../db/models';
import AppError from '../utils/application_errors';

class UserController {
  async getUserByPk (req, res, next) {
    try {
      const { params: { userId } } = req;
      const foundUser = await User.findByPk(+userId, {
        attributes: {
          exclude: ['password']
        }
      });
      if (foundUser) {
        return res.status(200).send(foundUser);
      }else {
        next(new AppError.NotFoundError('user'));
      }
    } catch (e) {
      next(e);
    }
  };

  async createUser (req, res, next) {
    try {
      const createdUser = await User.create(req.body);
      if (createdUser) {
        const data = createdUser.get();
        delete data.password;
        return res.status(201).send(data);
      }
    } catch (e) {
      next(e);
    }
  };

  async updateUser (req, res, next) {
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
    } catch (e) {
      next(e);
    }
  };

  async deleteUser (req, res, next) {
    try {
      const { userId } = req.params;
      const deletedRowCount = await User.destroy({
        where: {
          id : userId
        }
      });
      if (deletedRowCount) {
        return res.send(`${deletedRowCount}`);
      } else {
        next(new AppError.BadRequestError());
      }
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController();

