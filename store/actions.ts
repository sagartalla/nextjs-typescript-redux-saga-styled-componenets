import { action } from "typesafe-actions";

import ActionTypes from "./constants";

export const loadData = () => action(ActionTypes.LOAD_DATA);

export const failure = (error: object) => action(ActionTypes.FAILURE, error);

export const loadDataSuccess = (data: object) =>
  action(ActionTypes.LOAD_DATA_SUCCESS, data);
