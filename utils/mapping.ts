import ClaimIcon from "../public/images/claim.svg";
import PolicyIcon from "../public/images/policy.svg";
import RenewIcon from "../public/images/renew.svg";
import EditIcon from "../public/images/edit.svg";
import CarIcon from "../public/images/car.svg";
import BikeIcon from "../public/images/bike.svg";

export const PLAN_MAPPING = {
  car_comprehensive: "COMPREHENSIVE PLAN", // eslint-disable-line
  bike_comprehensive: "COMPREHENSIVE PLAN", // eslint-disable-line
  bike_tp: "THIRD PARTY PLAN", // eslint-disable-line
  car_tp: "THIRD PARTY PLAN", // eslint-disable-line
  bike_bundled: "BUNDLED PLAN", // eslint-disable-line
  car_bundled: "BUNDLED PLAN", // eslint-disable-line
  zero_depreciation_car: "ZERO DEPRECIATION CAR" // eslint-disable-line
};

export const SMALL_CASE_PLAN_MAPPING = {
  car_comprehensive: "Comprehensive", // eslint-disable-line
  zero_depreciation_car: "Zero Dep Policy" // eslint-disable-line
};

export const INSPECTION_STATUS = {
  INSPECTION_SURVEY_PENDING: "SCHEDULED",
  INSPECTION_RESCHEDULED: "SCHEDULED",
  INSPECTION_SCHEDULE_PENDING: "SCHEDULE PENDING",
  INSPECTION_ASSESSMENT_PENDING: "PROCESSING",
  INSPECTION_EXPIRED: "EXPIRED",
  INSPECTION_CANCELLED: "CANCELLED",
  INSPECTION_APPROVED: "APPROVED",
  INSPECTION_APPROVED_WITH_EXCLUSIONS: "APPROVED",
  INSPECTION_REJECTED: "REJECTED",
  PENDING_PAYMENT: "PENDING"
};

export const MAKE_CLAIM = "Make a Claim";
export const DOWNLOAD_POLICY = "Download Policy";
export const RENEW_ACKO_POLICY = "Renew Acko Policy";
export const EDIT_POLCY = "Edit Policy";

export const quickLinksData = [
  {
    icon: ClaimIcon,
    text: "Make a Claim",
    link: "",
    key: MAKE_CLAIM
  },
  {
    icon: PolicyIcon,
    text: "Download Policy",
    link: "",
    key: DOWNLOAD_POLICY
  },
  {
    icon: RenewIcon,
    text: "Renew Acko Policy",
    link: "",
    key: RENEW_ACKO_POLICY
  },
  {
    icon: EditIcon,
    text: "Edit Policy",
    link: "",
    key: EDIT_POLCY
  }
];

export const insuranceCardsData = [
  {
    title: "Car",
    url: "/",
    details: [],
    bg: CarIcon,
    buttonText: "View Prices",
    redirectUrl: "/car/car-type"
  },
  {
    title: "Bike",
    url: "/bike",
    details: [],
    bg: BikeIcon,
    buttonText: "View Prices",
    redirectUrl: `${process.env.HOST_URL}/bike`
  }
];
