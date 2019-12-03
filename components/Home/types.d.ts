import { Store } from "redux";
import { ActionType } from "typesafe-actions";
import * as actions from "./index/actions";

export type AppActions = ActionType<typeof actions>;

export interface HomeStateType {
  readonly proposals: object[];
  readonly policies: object[];
}

import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

/* --- STATE --- */

interface HomeState {
  readonly vehicleType: string;
  readonly policies: PolicyProps[];
  readonly renewals: RenewalProps[];
  readonly proposals: ProposalProps[]; // create Proposal Interface
  readonly reviews: ReviewProps[]; // create reviews Interface
  readonly claims: ReviewProps[];
  readonly loader: LoaderProps;
  readonly error: LoaderProps;
}

export interface PolicyProps {
  readonly expiry_date: string;
  readonly id: number;
  readonly lob: string;
  readonly mmv: MmvProps;
  readonly plan_type: string;
  readonly policy_number: string;
  readonly product: string;
  readonly registration_number: string;
  readonly tenure: number;
}

export interface ReviewProps {
  readonly status: string;
  readonly premium: number;
  readonly pid: number;
  readonly mmv: MmvProps;
  readonly registration_number: string;
  readonly preinspection_date: string;
  readonly preinspection_time: string;
  readonly pay_before: string;
  readonly plan_type: string;
  readonly actual_premium: number;
}
export interface ProposalProps {
  readonly id: string;
  readonly mmv: MmvProps;
  readonly registration_number: string;
  readonly plans: PlanProps[];
  readonly redirect_link: string;
}

export interface RenewalProps {
  readonly id: string;
  readonly mmv: MmvProps;
  readonly registration_number: string;
  readonly plans: PlanProps[];
  readonly redirect_link: string;
  readonly plan_type: string;
  readonly expiry_date: string;
  readonly premium: number;
}

export interface MmvProps {
  readonly make: string;
  readonly model: string;
  readonly variant: string;
}

export interface PlanProps {
  readonly plan_type: string;
  readonly premium: number;
  readonly discounted_premium: number;
}
export interface LoaderProps {
  readonly policies: boolean;
  readonly proposals: boolean;
  readonly workFlow: boolean;
}

export interface UserDataProps {
  phone: string;
  name: string;
  email: string;
}
// separate out the values to another interface

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

// type RootState = ApplicationRootState;
type ContainerState = HomeState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions };
