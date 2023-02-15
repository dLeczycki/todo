import { Todo } from '../types';

export class TodoRecord implements Todo {
  id: string;
  title: string;

  constructor(todo: Todo) {
    this.id = todo.id;
    this.title = todo.title;
  }

  static getAll(): Todo[]{
    throw new Error('Not Implemented');
  }

  static get(id: string): Todo{
    throw new Error('Not Implemented');
  }

  add(): Todo{
    throw new Error('Not Implemented');
  }

  update(todo: Todo): Todo{
    throw new Error('Not Implemented');
  }

  delete(): Todo{
    throw new Error('Not Implemented');
  }
}