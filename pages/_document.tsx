import React, { ComponentType } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      /* Critical Path Generator */
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: ComponentType) => (props: any) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="/static/css/global.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
            rel="stylesheet"
          />
          <link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
