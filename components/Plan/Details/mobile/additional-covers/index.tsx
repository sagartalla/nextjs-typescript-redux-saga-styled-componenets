import React, { useState } from "react";
import styled from "styled-components";
import Card from "@acko-ui-kit/card";
import { Text } from "@acko-ui-kit/typography";
import { Box } from "@acko-ui-kit/common";
import CoverItem, { AdditionalCover } from "./cover-item";
import MoreArrow from "../../../../../public/images/plan/details/more.svg";
import LessArrow from "../../../../../public/images/plan/details/less.svg";

const ToggleLink = styled(Text)`
  color: #47affa;
  width: fit-content;
  margin: 32px auto;
  cursor: pointer;
`;

const iconStyles = {
  width: "20px",
  height: "10px",
  marginLeft: "5px"
};

const AdditionalCovers = ({
  additionalCovers
}: {
  additionalCovers: AdditionalCover[];
}) => {
  const copyAdditionalCovers = [...additionalCovers];
  const firstAddCover = copyAdditionalCovers.shift();
  const [showMore, setShowMore] = useState(false);
  return (
    <Card styles={{ marginBottom: "24px" }}>
      <Text>Additional Covers</Text>
      <Box mt="40px">
        {firstAddCover ? (
          <CoverItem
            key={firstAddCover.title}
            additionalCover={firstAddCover}
          />
        ) : null}
        <Box>
          {!showMore && (
            <ToggleLink onClick={() => setShowMore(!showMore)} size="xs">
              More Covers
              <MoreArrow style={iconStyles} />
            </ToggleLink>
          )}
        </Box>
        {showMore &&
          copyAdditionalCovers.map(additionalCover => (
            <CoverItem
              key={additionalCover.title}
              additionalCover={additionalCover}
            />
          ))}
        <Box>
          {showMore && (
            <ToggleLink onClick={() => setShowMore(!showMore)} size="xs">
              <LessArrow style={iconStyles} />
            </ToggleLink>
          )}
        </Box>
      </Box>
    </Card>
  );
};

export default AdditionalCovers;
