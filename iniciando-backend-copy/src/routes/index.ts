import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

// routes.get('/', (request, response) => response.json({ message: 'Hello go' }));

export default routes;
