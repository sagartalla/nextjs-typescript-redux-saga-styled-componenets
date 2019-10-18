import React from "react";
import Link from "next/link";
import { NextPage } from "next";
import styled from "styled-components";

import Layout from "../components/Layout";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Title>Hello Next.js</Title>
      <p>
        <Link href="/about">
          <a href="/about">About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
