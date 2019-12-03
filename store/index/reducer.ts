import ActionTypes from "./constants";
import { AppActions, InitialStateType } from "../types.d";

const InitialState: InitialStateType = {
  proposalCount: null,
  userName: "",
  mobileNumber: "",
  appDataLoaded: null,
  toastMessage: ""
};

function reducer(state = InitialState, action: AppActions) {
  switch (action.type) {
    case ActionTypes.GET_APP_DATA:
      return {
        ...state,
        appDataLoaded: null
      };
    case ActionTypes.GET_APP_DATA_SUCCESS:
      return {
        ...state,
        proposalCount: action.payload.proposalCount,
        userName: action.payload.userName,
        mobileNumber: action.payload.mobileNumber,
        appDataLoaded: true
      };
    case ActionTypes.GET_APP_DATA_FAILURE:
      return {
        ...state,
        appDataLoaded: false
      };
    case ActionTypes.SET_TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
