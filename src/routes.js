import { Router } from 'express';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

import authMiddleare from './app/middlewares/auth';
import multerConfig from './config/multer';

const routes = new Router();

const update = multer(multerConfig);
routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleare);
routes.post('/files', update.single('file'), FileController.store);
routes.put('/users', authMiddleare, UserController.update);
routes.get('/providers', ProviderController.index);

export default routes;
