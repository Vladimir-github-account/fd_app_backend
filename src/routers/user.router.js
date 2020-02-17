import express               from 'express';
import UserController        from '../controllers/user.controller.js';
import checkPermission
                             from '../middlewares/permissions/checkPermission.js';
import { ACTIONS, ENTITIES } from '../constants';
import checkSelf             from '../middlewares/permissions/user/checkSelf';
import checkOtherUserRoles
                             from '../middlewares/permissions/user/checkOtherUserRoles';
import checkValidation       from '../middlewares/validations/checkValidation';
import validationSchemas     from './../utils/data_validations';

const userRouter = express.Router();

const checkPermissionUser = checkPermission( ENTITIES.USER );
const checkUserValidation = checkValidation( validationSchemas.userSchema );

userRouter.post( '',
    checkSelf,
    checkPermissionUser( ACTIONS.CREATE ),
    checkUserValidation( ACTIONS.CREATE ),
    UserController.createUser
);

userRouter.get( '/:userId',
    checkSelf,
    checkPermissionUser( ACTIONS.READ ),
    UserController.getUserByPk
);

userRouter.patch( '/:userId',
    checkSelf,
    checkOtherUserRoles,
    checkPermissionUser( ACTIONS.UPDATE ),
    checkUserValidation( ACTIONS.UPDATE ),
    UserController.updateUser
);

userRouter.delete( '/:userId',
    checkSelf,
    checkPermissionUser( ACTIONS.DELETE ),
    UserController.deleteUser
);

export default userRouter;