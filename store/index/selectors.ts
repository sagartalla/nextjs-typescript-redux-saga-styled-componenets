import { createSelector } from "reselect";
// import { InitialStateType } from "../types.d";

// Need to find the solution for state type
const selectGlobal = (state: any) => state.indexReducer;

export const getMobileNumber = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.mobileNumber
  );

export const getUserName = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userName
  );

export const getToastMessage = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.toastMessage
  );
