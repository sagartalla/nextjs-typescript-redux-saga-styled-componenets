import ActionTypes from "./constants";
import { AppActions } from "../types.d";
import { InitialState } from "../reducer";

function reducer(state = InitialState.indexReducer, action: AppActions) {
  switch (action.type) {
    case ActionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.payload }
      };
    case ActionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.payload }
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
