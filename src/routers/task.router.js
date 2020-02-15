import express from 'express';
import TaskController      from '../controllers/task.controller.js';
import checkOwner          from "../middlewares/permissions/task/checkOwner.js";
import checkPermission     from "../middlewares/permissions/checkPermission.js";
import checkValidation     from "../middlewares/validations/checkValidation";
import validationSchemas   from './../utils/data_validations';
import {ACTIONS, ENTITIES} from '../constants';

const taskRouter = express.Router();

const checkPermissionTask = checkPermission(ENTITIES.TASK);
const checkTaskValidation = checkValidation( validationSchemas.taskSchema );

taskRouter.post('',
    checkOwner,
    checkPermissionTask(ACTIONS.CREATE ),
    checkTaskValidation(ACTIONS.CREATE),
    TaskController.createTask
);

taskRouter.get('/:taskId',
    checkOwner,
    checkPermissionTask(ACTIONS.READ),
    TaskController.getTaskByPk
);

taskRouter.patch('/:taskId',
    checkOwner,
    checkPermissionTask(ACTIONS.UPDATE ),
    checkTaskValidation(ACTIONS.UPDATE),
    TaskController.updateTask
);

taskRouter.delete('/:taskId',
    checkOwner,
    checkPermissionTask(ACTIONS.DELETE ),
    TaskController.deleteTask
);

export default taskRouter;