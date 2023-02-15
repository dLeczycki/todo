import { castQueryResult, pool } from '../utils/db';
import { Todo } from '../types';

export class TodoRecord implements Todo {
  id: string;
  title: string;

  constructor(todo: Todo) {
    this.id = todo.id;
    this.title = todo.title;
  }

  static async getAll(): Promise<Todo[]>{
    const todos = castQueryResult<Todo>(await pool.query('SELECT * FROM `todos`'));
    return todos;
  }

  static async get(id: string): Promise<TodoRecord | null>{
    const todo = castQueryResult<Todo>(await pool.query('SELECT * FROM `todos` WHERE `id` = :id', { id }))[0];

    if(!todo) return null;

    return new TodoRecord(todo);
  }

  async add(): Promise<Todo> {
    await pool.query('INSERT INTO `todos`(`id`,`title`) VALUES (:id, :title)', { id: this.id, title: this.title });

    return this;
  }

  async update(): Promise<Todo>{
    await pool.query('UPDATE `todos` SET `title` = :title WHERE `id` = :id', { id: this.id, title: this.title });

    return this;
  }

  async delete(): Promise<void>{
    await pool.query('DELETE FROM `todos` WHERE `id` = :id', { id: this.id });
  }
}