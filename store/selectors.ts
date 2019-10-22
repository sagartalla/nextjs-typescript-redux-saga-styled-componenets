import { createSelector } from "reselect";
import { InitialStateType } from "./types.d";

const selectGlobal = (state: InitialStateType) => state;

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

export default {};
