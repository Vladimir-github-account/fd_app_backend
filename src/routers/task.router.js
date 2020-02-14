const express = require('express');
import TaskController from '../controllers/task.controller.js';

const taskRouter = express.Router();

taskRouter.get('/:taskId',
    TaskController.getTaskByPk
);

taskRouter.post('',
    TaskController.createTask
);

taskRouter.patch('/:taskId',
    TaskController.updateTask
);

taskRouter.delete(
    '/:taskId',
    TaskController.deleteTask
);

module.exports = taskRouter;