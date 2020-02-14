import AppError from '../../utils/application_errors';
import { User } from '../../db/models';

export default async function (req, res, next) {
  try {
    const { email } = req.body;
    const user = await User.findOne({
                                      where: {
                                        email
                                      }
                                    });
    if (user) {
      req.user = user;
      next();
    } else {
      next(new AppError.NotFoundError('user'));
    }
  } catch (e) {
    next(e);
  }
}