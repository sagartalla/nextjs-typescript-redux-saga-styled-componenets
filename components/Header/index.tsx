import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { getMobileNumber, getUserName } from "../../store/index/selectors";

const mapStateToProps = createStructuredSelector({
  mobileNumber: getMobileNumber(),
  userName: getUserName()
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
