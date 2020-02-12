const express = require('express');
const userRouter = require('./user.router.js');

const router = express.Router();

router.use('/user', userRouter);

module.exports = router;