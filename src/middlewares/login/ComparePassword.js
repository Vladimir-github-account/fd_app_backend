import bcrypt from 'bcrypt';
import AppError from '../../utils/application_errors';

export default async function (req, res, next){
    try {
        const { user } = req;
        const { password: requestPassword } = req.body;
        if( await bcrypt.compare(requestPassword, user.password) ){
            const userData = user.get();
            delete userData.password;
            return res.status(200).send(userData);
        }
        next( new AppError.InvalidPasswordError() );
    }catch (e) {
        next(e);
    }
}