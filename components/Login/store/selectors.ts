import { createSelector } from "reselect";

// Need to find the solution for state type
const selectLogin = ({ loginReducer }: any) => loginReducer;

export const getMobileNumber = () =>
  createSelector(
    selectLogin,
    loginReducer => loginReducer.mobileNumber
  );

export const getOtpSent = () =>
  createSelector(
    selectLogin,
    loginReducer => loginReducer.otpSent
  );

export const getOtpVerified = () =>
  createSelector(
    selectLogin,
    loginReducer => loginReducer.otpVerified
  );
