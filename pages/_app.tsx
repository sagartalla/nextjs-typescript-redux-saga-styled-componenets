import App, { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Store } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";

import createStore from "../store/store";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

interface Props {
  store: Store;
}

class StoreApp extends App<Props & AppProps> {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(StoreApp));
