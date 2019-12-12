import React from "react";
import { Box, Flex } from "@acko-ui-kit/common";
import { Text } from "@acko-ui-kit/typography";
import Placeholder from "../../../../../public/images/plan/details/cover-placeholder.svg";

export interface ItemProps {
  displayText: string;
  image: string;
}

const Item = ({ displayText, image }: ItemProps) => {
  return (
    <Box width="50%" margin="50px 0">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        {image ? <img src={image} alt={displayText} /> : <Placeholder />}
        <Text size="xxs" style={{ marginTop: "20px" }}>
          {displayText}
        </Text>
      </Flex>
    </Box>
  );
};

export default Item;
