import { action } from "typesafe-actions";
import ActionTypes from "./constants";

interface OnSendOtpInterface {
  phone: string;
}

interface OnVerifyOtpInterface {
  phone: string;
  otp: string;
}

export const onSendOtp = (data: OnSendOtpInterface) =>
  action(ActionTypes.SEND_OTP, data);

export const setOtpSent = (data: boolean) =>
  action(ActionTypes.SET_OTP_SENT, data);

export const onVerifyOtp = (data: OnVerifyOtpInterface) =>
  action(ActionTypes.ON_VERIFY_OTP, data);

export const onVerifyOtpSuccess = (data: boolean) =>
  action(ActionTypes.ON_VERIFY_OTP_SUCCESS, data);
