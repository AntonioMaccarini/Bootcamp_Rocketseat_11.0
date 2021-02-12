import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('server starded on port 3333!');
});
