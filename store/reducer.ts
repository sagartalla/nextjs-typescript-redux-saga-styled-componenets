import ActionTypes from "./constants";
import { AppActions, InitialStateType } from "./types.d";

export const InitialState: InitialStateType = {
  placeholderData: null
};

function reducer(state = InitialState, action: AppActions) {
  switch (action.type) {
    case ActionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.payload }
      };

    default:
      return state;
  }
}

export default reducer;
