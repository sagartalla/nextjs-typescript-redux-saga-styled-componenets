import { createSelector } from "reselect";

// Need to find the solution for state type
const selectHome = ({ homeReducer }: any) => homeReducer;

export const selectPolicies = () =>
  createSelector(
    selectHome,
    homeReducer => homeReducer.policies
  );

export const selectProposals = () =>
  createSelector(
    selectHome,
    homeReducer => homeReducer.proposals
  );
