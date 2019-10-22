import { combineReducers } from "redux";
import { InitialStateType } from "./types.d";

import indexReducer from "./index/reducer";

export const InitialState: InitialStateType = {
  indexReducer: {
    placeholderData: [],
    count: 0
  }
};

export default combineReducers({
  indexReducer
});
