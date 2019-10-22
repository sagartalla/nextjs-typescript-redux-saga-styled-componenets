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
    default:
      return state;
  }
}

export default reducer;
