import ActionTypes from "./constants";
import { AppActions, InitialStateType } from "./types.d";

export const InitialState: InitialStateType = {
  placeholderData: null,
  count: 0
};

function reducer(state = InitialState, action: AppActions) {
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
