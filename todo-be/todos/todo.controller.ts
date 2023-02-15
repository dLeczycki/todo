import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { TodoRecord } from './todo.record';

const getTodos = async (req: Request, res: Response) => {
  const todos = await TodoRecord.getAll();

  return res.json(todos);
};

const getTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await TodoRecord.get(id);

  if(!todo) {
    return res.status(404).json({ message: 'Not Found' });
  }

  res.json(todo);
};

const addTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  if(!title) return res.status(400).json({ message: 'Bad Request' });

  const id = uuid();

  const todo = new TodoRecord({ id, title });
  await todo.add();

  return res.status(201).json(todo);
};

const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await TodoRecord.get(id);
  if(!todo) return res.status(404).json({ message: 'Not Found' });
  
  const { title } = req.body;
  todo.title = title;
  await todo.update();

  return res.json(todo);
};

const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await TodoRecord.get(id);

  if(!todo) return res.status(404).json({ message: 'Bad Request' });

  await todo.delete();
  return res.json({ message: 'Ok' });
};

export { getTodos, getTodo, addTodo, updateTodo, deleteTodo };