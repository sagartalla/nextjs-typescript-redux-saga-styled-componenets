import { combineReducers } from "redux";

import indexReducer from "./index/reducer";
import loginReducer from "../components/Login/store/reducer";
import homeReducer from "../components/Home/store/reducer";

export default combineReducers({
  indexReducer,
  loginReducer,
  homeReducer
});
