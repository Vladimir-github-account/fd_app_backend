const express = require('express');
import checkUserAuthorization from '../middlewares/authorizations/checkUserAuthorization.js';
import comparePassword from '../middlewares/login/ComparePassword';
import findUserByEmail from '../middlewares/login/FindUserByEmail';
import getUserInfo from '../middlewares/getUserInfo';
const userRouter = require('./user.router.js');
const taskRouter = require('./task.router.js');

const router = express.Router();
router.use('/login', findUserByEmail, comparePassword);
router.use(checkUserAuthorization, getUserInfo);
router.use('/user', userRouter);
router.use('/task', taskRouter);

module.exports = router;