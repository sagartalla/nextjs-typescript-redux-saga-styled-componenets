import { action } from "typesafe-actions";

import ActionTypes from "./constants";

export const loadData = () => action(ActionTypes.LOAD_DATA);

export const failure = (error: object) => action(ActionTypes.FAILURE, error);

export const incrementCount = () => action(ActionTypes.INCREMENT);

export const loadDataSuccess = (data: Array<object>) =>
  action(ActionTypes.LOAD_DATA_SUCCESS, data);
