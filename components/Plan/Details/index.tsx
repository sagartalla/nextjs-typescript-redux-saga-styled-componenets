import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { onSendOtp, setOtpSent, onVerifyOtp } from "./store/action";
import { setToastMessage } from "../../store/index/actions";
import { getMobileNumber, getOtpSent, getOtpVerified } from "./store/selectors";

import { getToastMessage } from "../../store/index/selectors";

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {},
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
