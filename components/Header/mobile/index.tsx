import React from "react";
import PropTypes from "prop-types";
import { styled } from "@acko-ui-kit/common";
import Link from "next/link";
import { Row, Col } from "@acko-ui-kit/layout";
import { Text } from "@acko-ui-kit/typography";
import { NextPageExtended } from "../../../interfaces";
import Logo from "../../../public/images/logo.svg";

// import Logout from "mobile/containers/Logout";

const HeaderCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LogoCol = styled(HeaderCol)`
  justify-content: flex-start;
`;

const HeaderRow = styled(Row)`
  padding: 20px;
`;

const UserText = styled(Text)`
  width: 50%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface Props {
  mobileNumber: string;
  userName: string;
}

const Header: NextPageExtended<Props> = ({ mobileNumber, userName }: Props) => {
  const userText =
    userName !== null && userName !== "" ? userName : mobileNumber;
  return (
    <HeaderRow>
      <LogoCol xxs={1 / 2}>
        <Link href="/">
          <Logo />
        </Link>
      </LogoCol>
      <HeaderCol xxs={1 / 2} noPadded>
        {/** eslint-disable no-nested-ternary */}
        {!mobileNumber ? (
          <Link href="/login">
            <Text size="xs">Login</Text>
          </Link>
        ) : (
          <UserText size="xs">{userText}</UserText>
        )}
        {
          //   !userData ? <Text size="xs">Help</Text> : <Logout />
        }
      </HeaderCol>
    </HeaderRow>
  );
};

Header.propTypes = {
  mobileNumber: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

export default Header;
