import { createReducer, on } from '@ngrx/store';
import { incremenet, decrement, reset } from './counter.actions';

export const initialState = 0;

export const _counterReducer = createReducer(
  initialState,
  on(incremenet, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
