import React from "react";
import PropTypes from "prop-types";
import QuickLinks from "./quickLinks";
import InsuranceCards from "./insuranceCards";
import PolicyCards from "./policyCards";
import ProposalCards from "./proposalCards";
import { NextPageExtended } from "../../../interfaces";
import { ProposalProps, PolicyProps } from "../types.d";
import { Wrapper } from "./styles";
import { quickLinksData, insuranceCardsData } from "../../../utils/mapping";
import { useOnUser, useOnMount } from "./useCustomHooks";

interface Props {
  getProposals: Function;
  getPolicies: Function;
  proposals: ProposalProps[];
  policies: PolicyProps[];
  mobileNumber: string;
}

const Home: NextPageExtended<Props> = ({
  getProposals,
  getPolicies,
  proposals,
  policies,
  mobileNumber
}: Props) => {
  useOnUser({ mobileNumber, getPolicies });
  useOnMount({ getProposals });

  return (
    <Wrapper>
      <QuickLinks
        policyData={policies}
        renderData={quickLinksData}
        userData={{ mobileNumber }}
        loggedInStatus
        history={{}}
      />
      <InsuranceCards data={insuranceCardsData} />
      <PolicyCards data={policies} />
      <ProposalCards data={proposals} />
    </Wrapper>
  );
};

Home.propTypes = {
  getProposals: PropTypes.func.isRequired,
  getPolicies: PropTypes.func.isRequired
};
export default Home;
