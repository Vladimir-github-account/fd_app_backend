const express = require('express');
import checkUserAuthorization from '../middlewares/authorizations/checkUserAuthorization.js';
import comparePassword from '../middlewares/login/ComparePassword';
const userRouter = require('./user.router.js');
const taskRouter = require('./task.router.js');

const router = express.Router();
router.use('/login', comparePassword);
router.use(checkUserAuthorization);
router.use('/user', userRouter);
router.use('/task', taskRouter);

module.exports = router;