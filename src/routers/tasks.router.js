import express      from 'express';
import TasksController from '../controllers/tasks.controller.js';

const tasksRouter = express.Router();

tasksRouter.get( '', TasksController.getTasks );
tasksRouter.delete( '', TasksController.deleteTasks );

export default tasksRouter;
