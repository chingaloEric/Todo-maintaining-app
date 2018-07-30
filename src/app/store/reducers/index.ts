import { ActionReducerMap } from '@ngrx/store';
import { TodoReducer } from './reducers';

export interface AppState {
  todo: any;
}

export const reducers: ActionReducerMap<AppState> = {
  todo: TodoReducer
};

export const getTodoState = (state: AppState) => state.todo;
