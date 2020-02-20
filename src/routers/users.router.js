import express      from 'express';
import UsersController from '../controllers/users.controller.js';

const usersRouter = express.Router();

usersRouter.get( '', UsersController.getUsers );
usersRouter.delete( '', UsersController.deleteUsers );

export default usersRouter;
