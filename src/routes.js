import {Router} from 'express';
import * as MessageController from './controllers/message.js'

const routes = Router();

routes.get('/', MessageController.text);

routes.post('/message', MessageController.message); //MessageController.message
//no lugar de fazer a callback, que seria (request, response) => etc...
routes.get('/message', MessageController.message);
export default routes; 