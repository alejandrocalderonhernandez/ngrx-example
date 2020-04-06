import { increment, decrement, multiply, divide, reset } from './accountant.actions';
import { createReducer, on, props } from '@ngrx/store';

export const INITIAL_STATE = 10;

const COUNTER_REDUCER = createReducer(INITIAL_STATE,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(multiply, (state, {baseNumber}) => state * baseNumber),
    on(divide, (state, {baseNumber}) => state / baseNumber),
    on(reset, state => state = 0)
);

export function counterReducer(state, action) {
    return COUNTER_REDUCER(state, action);
}
