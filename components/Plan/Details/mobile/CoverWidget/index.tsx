import React from "react";
import { Box, Flex } from "@acko-ui-kit/common";
import { H6 } from "@acko-ui-kit/typography";
import styled from "styled-components";
import Item, { ItemProps } from "./item";

const StyledH6 = styled(H6)`
  text-align: center;
`;

const Covers = ({ items, title }: { items: ItemProps[]; title: string }) => (
  <Box mb="40px">
    <StyledH6>{title}</StyledH6>
    <Flex style={{ flexWrap: "wrap" }}>
      {items.map(item => (
        <Item key={item.displayText} {...item} />
      ))}
    </Flex>
  </Box>
);

export default Covers;
