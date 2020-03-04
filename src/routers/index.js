const express = require( 'express' );
import { ACTIONS }            from '../constants';
import checkUserAuthorization
                              from '../middlewares/authorizations/checkUserAuthorization.js';
import comparePassword        from '../middlewares/login/ComparePassword';
import findUserByEmail        from '../middlewares/login/FindUserByEmail';
import getUserInfo            from '../middlewares/getUserInfo';
import userRouter             from './user.router.js';
import taskRouter             from './task.router.js';
import tasksRouter            from './tasks.router.js';
import usersRouter            from './users.router.js';
import UserController         from '../controllers/user.controller';
import checkValidation        from '../middlewares/validations/checkValidation';
import validationSchemas      from '../utils/data_validations';

const checkUserValidation = checkValidation( validationSchemas.userSchema );

const router = express.Router();
router.use( '/sign_in', findUserByEmail, comparePassword );
router.use( '/sign_up',
    checkUserValidation( ACTIONS.CREATE ),
    UserController.createUser );
router.use( checkUserAuthorization, getUserInfo );
router.use( '/user', userRouter );
router.use( '/task', taskRouter );
router.use('/tasks', tasksRouter);
router.use('/users', usersRouter);

module.exports = router;