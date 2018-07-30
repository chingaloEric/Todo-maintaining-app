import { Action } from '@ngrx/store';
// import { Todo } from '../../modules/todo.module';

export const ADD_TODO = '[Todo] Add Todo';
export const DONE_TODO = '[Todo] DoneTodo';

export class AddTodo implements Action {
  readonly type = ADD_TODO;
  constructor(public payload: any) {}
}

export class DoneTodo implements Action {
  readonly type = DONE_TODO;
  constructor(public payload: any) {}
}

export type TodoActions = AddTodo | DoneTodo;