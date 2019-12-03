import App, { AppProps } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { Store } from "redux";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import createStore from "../store/store";
import { getAppData } from "../store/index/actions";

const theme = {
  colors: { primary: "#0070f3" }
};

interface Props {
  store: Store;
}

class StoreApp extends App<Props & AppProps> {
  componentDidMount() {
    const { store } = this.props;
    const { indexReducer } = store.getState();
    const { appDataLoaded } = indexReducer;
    if (!appDataLoaded) {
      store.dispatch(getAppData());
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <>
            <Head>
              <link
                href="https://fonts.googleapis.com/css?family=Cabin"
                rel="stylesheet"
                key="google-font-cabin"
              />

              <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
                rel="stylesheet"
              />
              <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
            <style global jsx>{`
              body {
                font-family: "Inter", "Open Sans", "Helvetica Neue", Helvetica,
                  Arial, sans-serif;
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                background: #f3f3f7;
                scroll-behavior: smooth;
                box-sizing: border-box;
              }
              *,
              *:before,
              *:after {
                box-sizing: inherit;
              }
            `}</style>
          </>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(StoreApp));
