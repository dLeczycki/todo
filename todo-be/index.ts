import express from 'express';
import { config } from './config';
import { todoRouter } from './todos/todos.router';

const app = express();

app.use(express.json());

app.use('/todos', todoRouter);

app.listen(config.port, config.hostname, () => {
  console.log(
    `⚡️[server]: Todo App is running at http://${config.hostname}:${config.port}`
  );
});
