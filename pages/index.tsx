import React from "react";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";

import Link from "next/link";

import styled from "styled-components";
import { connect } from "react-redux";

import Layout from "../components/Layout";

import { loadData } from "../store/actions";
import { getPaceHolderData } from "../store/selectors";
import { InitialStateType } from "../store/types.d";
import { NextPageContextExtended, NextPageExtended } from "../interfaces";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

interface Props {
  placeholderData?: object | null;
}

const IndexPage: NextPageExtended<Props> = ({ placeholderData }) => {
  return (
    <Layout>
      <Title>Hello </Title>
      <p>
        <Link href="/about">
          <a href="/about">About</a>
        </Link>
      </p>
      <p>{JSON.stringify(placeholderData)}</p>
    </Layout>
  );
};

IndexPage.getInitialProps = async (
  ctx: NextPageContextExtended
): Promise<object> => {
  const { isServer } = ctx;
  await ctx.store.dispatch(loadData());
  return { isServer };
};

IndexPage.propTypes = {
  placeholderData: PropTypes.objectOf(PropTypes.shape({}))
};

IndexPage.defaultProps = {
  placeholderData: {}
};

interface ConnectedProps {
  placeholderData: object | null;
}

const mapStateToProps = createStructuredSelector<
  InitialStateType,
  ConnectedProps
>({
  placeholderData: getPaceHolderData()
});

export default connect(
  mapStateToProps,
  null
)(IndexPage);
