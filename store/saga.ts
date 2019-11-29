/* eslint-disable */
import { all, call, spawn } from "redux-saga/effects";
import indexSaga from "./index/saga";
import loginSaga from "../components/Login/store/saga";

function* rootSaga() {
  const sagas = [indexSaga, loginSaga];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

export default rootSaga;
