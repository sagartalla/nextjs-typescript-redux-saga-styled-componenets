/**
 * Gets the Login page data
 */

import { call, put, takeLatest } from "redux-saga/effects";
import ActionTypes from "./constants";
import { AppActions } from "../types.d";

import { setOtpSent, onVerifyOtpSuccess } from "./action";
import { setToastMessage } from "../../../store/index/actions";

import { fetchSendOtp, fetchVerifyOtp } from "./api";

interface ResponseInterface {
  metadata: { status: string };
  data: { proposals: object[]; renewals: object[] };
}

function* sendOtp(action: AppActions) {
  try {
    const response: ResponseInterface = yield call(
      fetchSendOtp,
      action.payload
    );
    const { metadata } = response;
    if (metadata.status === "SUCCESS") {
      yield put(setOtpSent(true));
    } else {
      yield put(setToastMessage("Send Otp failed"));
    }
  } catch (err) {
    console.log("err", err); // eslint-disable-line
    yield put(setToastMessage("Send Otp failed"));
  }
}

function* verifyOtp(action: AppActions) {
  try {
    const response: ResponseInterface = yield call(
      fetchVerifyOtp,
      action.payload
    );
    const { metadata } = response;
    if (metadata.status === "SUCCESS") {
      yield put(onVerifyOtpSuccess(true));
    } else {
      yield put(setToastMessage("Verified Otp failed"));
    }
  } catch (err) {
    console.log("err", err); // eslint-disable-line
    yield put(setToastMessage("Verified Otp failed"));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginSaga() {
  yield takeLatest(ActionTypes.SEND_OTP, sendOtp);
  yield takeLatest(ActionTypes.ON_VERIFY_OTP, verifyOtp);
}
