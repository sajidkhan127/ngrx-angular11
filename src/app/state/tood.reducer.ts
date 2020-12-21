import { Todo } from './todo.model';
// import { TodoActionTypes, TodoActions } from './todo.actions';
import { Actions, Add, Remove } from '../state/todo.actions';
import { createReducer, on } from '@ngrx/store';
import { TodoState } from './todo.state';
const initialState: Todo = {
  id: 1,
  task: 'task 1',
  complete: false,
};

export function todoReducer(state: Todo[] = [initialState], action: any) {
  switch (action.type) {
    case Add:
      return [...state, action.payload];

    // Add this case:
    case Remove:
      state.splice(action.payload, 1);
      return state;

    default:
      return state;
  }
}

// export const _counterReducer = createReducer(
//   initialState,
//   on(incremenet, (state) => state + 1),
//   on(decrement, (state) => state - 1),
//   on(reset, (state) => 0)
// );

// export function counterReducer(state: any, action: any) {
//   return _counterReducer(state, action);
// }
