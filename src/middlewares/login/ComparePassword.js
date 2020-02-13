import bcrypt from 'bcrypt';
import AppError from '../../utils/application_errors';
import { User } from '../../db/models';

export default async function (req, res, next){
    try {
        const { email } = req.body;
        const user = await User.findOne({
            where:{
                email
            }
        });
        if (user){
            const { password: requestPassword } = req.body;
            if( await bcrypt.compare(requestPassword, user.password) ){
                const userData = user.get();
                delete userData.password;
                return res.status(200).send(userData);
            }
            next( new AppError.InvalidPasswordError() );
        }
        next(new AppError.NotFoundError('user'));
    }catch (e) {
        next(e);
    }
}