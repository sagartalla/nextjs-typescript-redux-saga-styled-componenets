import { action } from "typesafe-actions";

import ActionTypes from "./constants";

interface DataSuccessInterface {
  proposalCount: number;
  userName: string;
  mobileNumber: string;
}

export const getAppData = () => action(ActionTypes.GET_APP_DATA);

export const getAppDataSuccess = (data: DataSuccessInterface) =>
  action(ActionTypes.GET_APP_DATA_SUCCESS, data);

export const getAppDataFailure = () => action(ActionTypes.GET_APP_DATA_FAILURE);

export const setToastMessage = (data: string) =>
  action(ActionTypes.SET_TOAST_MESSAGE, data);
