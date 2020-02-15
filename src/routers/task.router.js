const express = require('express');
import TaskController      from '../controllers/task.controller.js';
import checkOwner          from "../middlewares/permissions/task/checkOwner.js";
import checkPermission     from "../middlewares/permissions/checkPermission.js";
import {ACTIONS, ENTITIES} from '../constants';

const taskRouter = express.Router();

const checkPermissionTask = checkPermission(ENTITIES.TASK);

taskRouter.get('/:taskId',
    checkOwner,
    checkPermissionTask(ACTIONS.READ),
    TaskController.getTaskByPk
);

taskRouter.post('',
    checkOwner,
    checkPermissionTask(ACTIONS.CREATE ),
    TaskController.createTask
);

taskRouter.patch('/:taskId',
    checkOwner,
    checkPermissionTask(ACTIONS.UPDATE ),
    TaskController.updateTask
);

taskRouter.delete('/:taskId',
    checkOwner,
    checkPermissionTask(ACTIONS.DELETE ),
    TaskController.deleteTask
);

module.exports = taskRouter;