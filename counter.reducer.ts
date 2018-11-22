import { ActionTypes, Reset } from './counter.action'
import { Action } from '@ngrx/store'

export const initialState = 0

export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1
    case ActionTypes.Decrement:
      return state - 1
    case ActionTypes.Reset:
      return initialState
    default:
      return state
  }
}
