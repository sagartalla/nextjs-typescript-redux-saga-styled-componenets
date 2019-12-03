import React from "react";
import { NextPageContext } from "next";
import PropTypes from "prop-types";
import isMobile from "../utils/isMobile";
import { NextPageExtended } from "../interfaces";
import Container from "../components/Home";
import MobileHome from "../components/Home/mobile";
import DesktopHome from "../components/Home/desktop";
import DesktopHeader from "../components/Header/desktop";
import MobileHeader from "../components/Header/mobile";
import HeaderContainer from "../components/Header";

interface Props {
  isMobile: boolean;
}

const Home: NextPageExtended<Props> = ({ isMobile }) => {
  const Component = isMobile ? Container(MobileHome) : Container(DesktopHome);
  const HeaderComponent = isMobile
    ? HeaderContainer(MobileHeader)
    : HeaderContainer(DesktopHeader);
  return (
    <>
      <HeaderComponent />
      <Component />
    </>
  );
};

Home.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

Home.getInitialProps = async (ctx: NextPageContext) => {
  return { isMobile: isMobile(ctx.req) };
};

export default Home;
