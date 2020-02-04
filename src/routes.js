import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleare from './app/middlewares/auth';

const routes = new Router();
routes.post('/sessions', SessionController.store);


routes.post('/users', UserController.store);
routes.use(authMiddleare);
routes.put('/users', authMiddleare, UserController.update);


export default routes;
