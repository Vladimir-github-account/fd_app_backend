const express = require('express');
const {getUserByPk} = require('../controllers/user.controller.js');

const userRouter = express.Router();
userRouter.get( '/:userId',
                getUserByPk,
);

module.exports = userRouter;