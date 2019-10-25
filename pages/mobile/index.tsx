import React from "react";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";

import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Layout from "../../components/Layout";

import { loadData, incrementCount } from "../../store/index/actions";
import {
  getPaceHolderData,
  getCount,
  getError
} from "../../store/index/selectors";
import { InitialStateType } from "../../store/types.d";
import { NextPageContextExtended, NextPageExtended } from "../../interfaces";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

interface Props {
  placeholderData?: Array<object> | null;
  isServer?: boolean;
  incrementCount?(): void;
  count?: number;
  error?: string | null;
}

const IndexPage: NextPageExtended<Props> = ({
  placeholderData,
  count,
  incrementCount,
  error
}) => {
  return (
    <Layout>
      <Title>Hello Mobile</Title>
      <button type="button" onClick={incrementCount}>
        Click Me
      </button>
      <p>You clicked {count} times</p>
      <p>{error || JSON.stringify(placeholderData)}</p>
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
  placeholderData: PropTypes.arrayOf(PropTypes.object),
  incrementCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  error: PropTypes.oneOfType([PropTypes.object])
};

IndexPage.defaultProps = {
  placeholderData: [],
  error: null
};

const mapStateToProps = createStructuredSelector<InitialStateType, Props>({
  placeholderData: getPaceHolderData(),
  count: getCount(),
  error: getError()
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
