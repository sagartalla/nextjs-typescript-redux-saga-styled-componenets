/* eslint-disable */
import { all, call, spawn } from "redux-saga/effects";
import indexSaga from "./index/saga";

function* rootSaga () {
  const sagas = [indexSaga];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}

export default rootSaga;