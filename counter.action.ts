import { Action } from '@ngrx/store'

export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Rese',
}

export class Increment implements Action {
  readonly type: string = ActionTypes.Increment
}

export class Decrement implements Action {
  readonly type: string = ActionTypes.Decrement
}

export class Reset implements Action {
  readonly type: string = ActionTypes.Reset
}
