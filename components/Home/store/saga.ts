/**
 * Gets the Home page data
 */

import { call, put, takeLatest } from "redux-saga/effects";
import ActionTypes from "./constants";
import { getProposalsSuccess, getPoliciesSuccess } from "./action";

import { fetchProposalData, fetchPolicyData } from "./api";

interface ProposalResponse {
  metadata: { status: string };
  data: { proposals: object[]; renewals: object[] };
}

export function* getProposalsData() {
  try {
    const response: ProposalResponse = yield call(fetchProposalData);
    const { metadata, data } = response;
    if (metadata.status === "SUCCESS") {
      yield put(getProposalsSuccess(data.proposals));
    } else {
      // yield put(getProposalsDataSuccess(data));
    }
  } catch (err) {
    console.log("err", err);
    // yield put(getProposalsDataSuccess(data));
  }
}

export function* getPoliciesData() {
  try {
    const response = yield call(fetchPolicyData);
    const { metadata, data } = response;
    if (metadata.status === "SUCCESS") {
      yield put(getPoliciesSuccess(data));
    } else {
      // yield put(getPolicySuccess(data));
    }
  } catch (err) {
    console.log("err", err);
    // yield put(getPolicySuccess(data));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  yield takeLatest(ActionTypes.GET_PROPOSALS, getProposalsData);
  yield takeLatest(ActionTypes.GET_POLICIES, getPoliciesData);
}
