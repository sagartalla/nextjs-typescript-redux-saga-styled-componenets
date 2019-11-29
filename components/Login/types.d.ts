import { Store } from "redux";
import { ActionType } from "typesafe-actions";
import * as actions from "./store/action";

export type AppActions = ActionType<typeof actions>;

export interface LoginStateType {
  readonly mobileNumber: string;
  readonly otpSent: boolean;
  readonly otpVerified: boolean;
}
