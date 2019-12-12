import React from "react";
import PropTypes from "prop-types";
import { NextPageContext } from "next";
import isMobile from "../../utils/isMobile";
import { NextPageExtended } from "../../interfaces";
import Container from "../../components/Login";
import DesktopDetails from "../../components/Plan/Details/desktop";
import MobileDetails from "../../components/Plan/Details/mobile";

interface Props {
  isMobile: boolean;
}

const Details: NextPageExtended<Props> = ({ isMobile }) => {
  const Component = isMobile
    ? Container(MobileDetails)
    : Container(DesktopDetails);
  return <Component />;
};

Details.getInitialProps = async (ctx: NextPageContext) => {
  return { isMobile: isMobile(ctx.req) };
};

Details.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Details;
