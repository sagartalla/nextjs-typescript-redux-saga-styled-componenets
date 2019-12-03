import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import { getProposals, getPolicies } from "./store/action";
import { selectProposals, selectPolicies } from "./store/selectors";
import { getMobileNumber } from "../../store/index/selectors";

const mapStateToProps = createStructuredSelector({
  proposals: selectProposals(),
  policies: selectPolicies(),
  mobileNumber: getMobileNumber()
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      getProposals,
      getPolicies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
