import { action } from "typesafe-actions";

import ActionTypes from "./constants";

export const getProposals = () => action(ActionTypes.GET_PROPOSALS);

export const getProposalsSuccess = (data: object[]) =>
  action(ActionTypes.GET_PROPOSALS_SUCCESS, data);

export const getPolicies = () => action(ActionTypes.GET_POLICIES);

export const getPoliciesSuccess = (data: object[]) =>
  action(ActionTypes.GET_POLICIES_SUCCESS, data);
