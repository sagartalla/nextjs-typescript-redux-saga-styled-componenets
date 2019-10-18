import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#0070f3"
  }
};

class StoreApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default StoreApp;
