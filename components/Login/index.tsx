import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { onSendOtp, setOtpSent, onVerifyOtp } from "./store/action";
import { setToastMessage } from "../../store/index/actions";
import { getMobileNumber, getOtpSent, getOtpVerified } from "./store/selectors";

import { getToastMessage } from "../../store/index/selectors";

const mapStateToProps = createStructuredSelector({
  mobileNumber: getMobileNumber(),
  otpSent: getOtpSent(),
  otpVerified: getOtpVerified(),
  toastMessage: getToastMessage()
});

// const mapStateToProps = (state: any) => ({
//   mobileNumber: state.loginReducer.mobileNumber,
//   otpSent: state.loginReducer.otpSent,
//   otpVerified: state.loginReducer.otpVerified,
//   toastMessage: state.indexReducer.toastMessage
// });

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onSendOtp,
      setOtpSent,
      onVerifyOtp,
      setToastMessage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
