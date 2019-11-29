import { combineReducers } from "redux";
import { InitialStateType } from "./types.d";

import indexReducer from "./index/reducer";
import loginReducer from "../components/Login/store/reducer";

export const InitialState: InitialStateType = {
  indexReducer: {
    placeholderData: [],
    count: 0,
    error: null,
    toastMessage: ""
  }
};

export default combineReducers({
  indexReducer,
  loginReducer
});
