import { all, put, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import ActionType from "./constants";

import { getAppDataSuccess, getAppDataFailure } from "./actions";
import { fetchAppData } from "./apis";

es6promise.polyfill();

function* getAppData() {
  try {
    const response = yield fetchAppData();
    if (response.metadata.status === "SUCCESS") {
      const {
        user_info: userInfo,
        proposal_count: proposalCount
      } = response.data;
      yield put(
        getAppDataSuccess({
          proposalCount,
          userName: userInfo.name,
          mobileNumber: userInfo.phone
        })
      );
    }
  } catch (err) {
    console.log("error:", err); // eslint-disable-line
    yield put(getAppDataFailure());
  }
}

function* rootSaga() {
  yield all([takeLatest(ActionType.GET_APP_DATA, getAppData)]);
}

export default rootSaga;
