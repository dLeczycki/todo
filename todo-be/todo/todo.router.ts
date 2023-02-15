import { Router } from 'express';
import * as todoController from './todo.controller';

const todoRouter = Router();

todoRouter
  .get('/', todoController.getTodos)
  .get('/:id', todoController.getTodo)
  .post('/', todoController.addTodo)
  .put('/:id', todoController.updateTodo)
  .delete('/:id', todoController.deleteTodo);

export {todoRouter};