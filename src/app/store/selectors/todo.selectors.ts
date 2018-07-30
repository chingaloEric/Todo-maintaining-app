import { createSelector } from '@ngrx/store';
import { getTodoState } from '../reducers';
import { getAllToDos } from '../reducers/reducers';

export const getTodos = createSelector(getTodoState, getAllToDos);
