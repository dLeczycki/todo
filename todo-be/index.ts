import express, { Request, Response } from 'express';
import { config } from './config';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from todo backend');
});

app.listen(config.port, config.hostname, () => {
  console.log(
    `⚡️[server]: Todo App is running at http://${config.hostname}:${config.port}`
  );
});
