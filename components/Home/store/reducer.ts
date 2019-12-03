import ActionTypes from "./constants";
import { AppActions, HomeStateType } from "../types.d";

const initialState: HomeStateType = {
  proposals: [],
  policies: []
};

function reducer(state = initialState, action: AppActions) {
  switch (action.type) {
    case ActionTypes.GET_PROPOSALS_SUCCESS: {
      return { ...state, proposals: action.payload };
    }
    case ActionTypes.GET_POLICIES_SUCCESS: {
      return { ...state, policies: action.payload };
    }
    default:
      return state;
  }
}

export default reducer;
