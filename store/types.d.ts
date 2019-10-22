import { Store } from "redux";
import { ActionType } from 'typesafe-actions';
import * as actions from './index/actions';

export interface ExtendedStore extends Store {
  runSagaTask: Function;
  sagaTask: any;
}

export type AppActions = ActionType<typeof actions>;

export interface InitialStateType {
  readonly placeholderData: Array<object> | null;
  count: number;
}


export default {};
