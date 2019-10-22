import { all, put, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import ActionType from "./constants";

import { loadDataSuccess, failure } from "./actions";
import { fetchJson } from "./apis";

es6promise.polyfill();

function* loadDataSaga() {
  try {
    const data = yield fetchJson();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([takeLatest(ActionType.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
