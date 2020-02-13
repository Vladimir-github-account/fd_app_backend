const express = require('express');
const TaskController = require('../controllers/task.controller.js');

const userRouter = express.Router();

userRouter.get('/:taskId',
    TaskController.getTaskByPk
);

userRouter.post('',
    TaskController.createTask
);

userRouter.patch('/:taskId',
    TaskController.updateTask
);

userRouter.delete(
    '/:taskId',
    TaskController.deleteTask
);

module.exports = userRouter;