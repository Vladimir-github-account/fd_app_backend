const express = require('express');
const UserController = require('../controllers/user.controller.js');

const userRouter = express.Router();

userRouter.get('/:userId',
               UserController.getUserByPk
);

userRouter.post('',
                UserController.createUser
);

userRouter.patch('/:userId',
                 UserController.updateUser
);

userRouter.delete(
  '/:userId',
  UserController.deleteUser
);

module.exports = userRouter;