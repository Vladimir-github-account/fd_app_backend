import express from 'express';
import UserController from '../controllers/user.controller.js';
import checkPermission from "../middlewares/permissions/checkPermission.js";
import {ACTIONS, ENTITIES} from '../constants';
import checkSelf from "../middlewares/permissions/user/checkSelf";

const userRouter = express.Router();

const checkPermissionUser = checkPermission(ENTITIES.USER);

userRouter.get('/:userId',
    checkSelf,
    checkPermissionUser(ACTIONS.READ),
    UserController.getUserByPk
);

userRouter.post('',
    checkSelf,
    checkPermissionUser(ACTIONS.READ),
    UserController.createUser
);

userRouter.patch('/:userId',
    checkSelf,
    checkPermissionUser(ACTIONS.READ),
    UserController.updateUser
);

userRouter.delete('/:userId',
    checkSelf,
    checkPermissionUser(ACTIONS.READ),
    UserController.deleteUser
);

export default userRouter;