const express = require('express');
import checkUserAuthorization from '../middlewares/authorizations/checkUserAuthorization.js';
import comparePassword from '../middlewares/login/ComparePassword';
import findUserByEmail from '../middlewares/login/FindUserByEmail';
import getUserInfo from '../middlewares/getUserInfo';
import userRouter from './user.router.js';
import taskRouter from './task.router.js';
import tasksRouter from './tasks.router.js';
import usersRouter from './users.router.js';

const router = express.Router();
router.use('/login', findUserByEmail, comparePassword);
router.use(checkUserAuthorization, getUserInfo);
router.use('/user', userRouter);
router.use('/task', taskRouter);
router.use('/tasks', tasksRouter);
router.use('/users', usersRouter);

module.exports = router;