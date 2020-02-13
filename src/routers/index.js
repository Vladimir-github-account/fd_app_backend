const express = require('express');
const userRouter = require('./user.router.js');
const taskRouter = require('./task.router.js');

const router = express.Router();

router.use('/user', userRouter);
router.use('/task', taskRouter);

module.exports = router;