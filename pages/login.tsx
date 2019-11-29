import React from "react";
import PropTypes from "prop-types";
import { NextPageContext } from "next";
import isMobile from "../utils/isMobile";
import { NextPageExtended } from "../interfaces";

import Container from "../components/Login";
import DesktopLogin from "../components/Login/desktop";
import MobileLogin from "../components/Login/mobile";

interface Props {
  isMobile: boolean;
}

const Login: NextPageExtended<Props> = ({ isMobile }) => {
  const Component = isMobile ? Container(MobileLogin) : DesktopLogin;
  return <Component />;
};

Login.getInitialProps = async (ctx: NextPageContext) => {
  return { isMobile: isMobile(ctx.req) };
};

Login.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default Login;
