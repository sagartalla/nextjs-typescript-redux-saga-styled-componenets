import { createSelector } from "reselect";
// import { InitialStateType } from "../types.d";

// Need to find the solution for state type
const selectGlobal = (state: any) => state.indexReducer;

export const getPaceHolderData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.placeholderData
  );

export const getCount = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.count
  );

export const getError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error
  );

export const getToastMessage = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.toastMessage
  );

export default {};
