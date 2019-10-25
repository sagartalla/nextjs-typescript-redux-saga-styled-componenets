import { createSelector } from "reselect";
import { InitialStateType } from "../types.d";

const selectGlobal = (state: InitialStateType) => state.indexReducer;

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

export default {};
