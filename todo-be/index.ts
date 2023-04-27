import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import { config } from './config';
import { errorHandler } from './middleware/errorHandler';
import { todoRouter } from './todos/todos.router';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/todos', todoRouter);

app.use(errorHandler);

app.listen(config.port, config.hostname, () => {
  console.log(
    `⚡️[server]: Todo App is running at http://${config.hostname}:${config.port}`
  );
});
