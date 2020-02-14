import bcrypt from 'bcrypt';
import AppError from '../../utils/application_errors';

export default async function (req, res, next) {
  try {
    const { password: requestPassword } = req.body;
    if (await bcrypt.compare(requestPassword, req.user.password)) {
      const userData = req.user.get();
      delete userData.password;
      return res.status(200).send(userData);
    } else {
      next(new AppError.InvalidPasswordError());
    }
  } catch (e) {
    next(e);
  }
}