import * as React from "react";
import Link from "next/link";
import Head from "next/head";
import PropTypes from "prop-types";

type Props = {
  title?: string;
  children?: {};
};

const Layout: React.FC<Props> = ({
  children,
  title = "Quick Car & Two Wheeler Insurance Policy Online - ACKO General Insurance Company"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a href="/">Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/about">
          <a href="/about">About</a>
        </Link>{" "}
        |{" "}
        <Link href="/users">
          <a href="/users">Users List</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I &apos; m here to stay (Footer)</span>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.instanceOf(React.Component),
    PropTypes.node
  ]).isRequired,
  title: PropTypes.string
};

Layout.defaultProps = {
  title: ""
};

export default Layout;
