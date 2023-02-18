import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { increment, decrement, reset } from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      count: state.count + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      count: state.count - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      count: 0,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
