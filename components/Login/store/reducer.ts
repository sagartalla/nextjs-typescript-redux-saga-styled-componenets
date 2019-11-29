import ActionTypes from "./constants";
import { AppActions, LoginStateType } from "../types.d";

export const initialState: LoginStateType = {
  mobileNumber: "",
  otpSent: false,
  otpVerified: false
};

function reducer(state = initialState, action: AppActions) {
  switch (action.type) {
    case ActionTypes.SEND_OTP: {
      return {
        ...state,
        mobileNumber: action.payload.phone.toString(),
        otpSent: false,
        otpVerified: false
      };
    }
    case ActionTypes.SET_OTP_SENT: {
      return { ...state, otpSent: action.payload };
    }
    case ActionTypes.ON_VERIFY_OTP_SUCCESS: {
      return { ...state, otpVerified: action.payload };
    }
    default:
      return state;
  }
}

export default reducer;
