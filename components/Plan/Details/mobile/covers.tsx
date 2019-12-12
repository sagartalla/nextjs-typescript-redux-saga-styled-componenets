import React from "react";
import styled from "styled-components";
import Card from "@acko-ui-kit/card";
import { Box, Flex } from "@acko-ui-kit/common";
import { Text } from "@acko-ui-kit/typography";

const Tag = styled(Box)`
  width: fit-content;
  border: 1px solid #000;
  border-radius: 10px;
  display: inline-block;
  margin: 4px 5px;
  &:first-of-type {
    margin: 4px 0;
  }
`;

const CustomText = styled(Text)`
  white-space: nowrap;
  padding: 3px 5px;
`;

const MoreLink = styled(Text)`
  display: inline;
  cursor: pointer;
`;

const Covers = ({ covers }: { covers: string[] }) => (
  <Card styles={{ marginBottom: "24px" }}>
    <Text color="#151619" size="xxs">
      Covers
    </Text>
    <Box mt="15px">
      <Flex styles={{ flexWrap: "wrap" }}>
        {covers.map(cover => (
          <Tag key={cover}>
            <CustomText size="xxxs">{cover}</CustomText>
          </Tag>
        ))}
      </Flex>
    </Box>
    <Box mt="20px" mb="10px" textAlign="right">
      <MoreLink size="xxs" color="#47AFFA" cursor="pointer">
        More Details
      </MoreLink>
    </Box>
  </Card>
);

export default Covers;
