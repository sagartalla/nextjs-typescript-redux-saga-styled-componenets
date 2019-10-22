import React from "react";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";

import Link from "next/link";

import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Layout from "../components/Layout";

import { loadData, incrementCount } from "../store/actions";
import { getPaceHolderData, getCount } from "../store/selectors";
import { InitialStateType } from "../store/types.d";
import { NextPageContextExtended, NextPageExtended } from "../interfaces";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

interface Props {
  placeholderData?: object | null;
  isServer: boolean;
  incrementCount?(): void;
  count?: number;
}

const IndexPage: NextPageExtended<Props> = ({
  placeholderData,
  count,
  incrementCount
}) => {
  return (
    <Layout>
      <Title>Hello</Title>
      <p>
        <Link href="/about">
          <a href="/about">About</a>
        </Link>
      </p>
      <button type="button" onClick={incrementCount}>
        Click Me
      </button>
      <p>You clicked {count} times</p>
      <p>{JSON.stringify(placeholderData)}</p>
    </Layout>
  );
};

IndexPage.getInitialProps = async (
  ctx: NextPageContextExtended
): Promise<Props> => {
  const { isServer } = ctx;
  await ctx.store.dispatch(loadData());
  return { isServer };
};

IndexPage.propTypes = {
  placeholderData: PropTypes.objectOf(PropTypes.shape({})),
  incrementCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

IndexPage.defaultProps = {
  placeholderData: {}
};

interface ConnectedProps {
  placeholderData: object | null;
  count: number;
}

const mapStateToProps = createStructuredSelector<
  InitialStateType,
  ConnectedProps
>({
  placeholderData: getPaceHolderData(),
  count: getCount()
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      incrementCount
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);
