const express = require('express');
const userRouter = require('./user.router.js');

const router = express.Router();

router.user('./user', userRouter);

module.exports = router;