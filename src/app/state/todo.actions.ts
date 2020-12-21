import { Action } from '@ngrx/store';
import { Todo } from './todo.model';

export const Add = '[Todo] Add Todo';
export const Remove = '[Todo] Remove Todo';

export class AddTodo implements Action {
  readonly type = Add;
  constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
  readonly type = Remove;
  constructor(public payload: number) {}
}

export type Actions = AddTodo | RemoveTodo;
