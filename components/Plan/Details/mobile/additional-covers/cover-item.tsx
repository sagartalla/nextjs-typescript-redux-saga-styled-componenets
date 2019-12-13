import React from "react";
import { Box, Flex } from "@acko-ui-kit/common";
import { Text } from "@acko-ui-kit/typography";
import styled from "styled-components";
import PlaceHolder from "../../../../../public/images/plan/details/add-cover-placeholder.svg";

export interface AdditionalCover {
  title: string;
  image: string;
  exclusive: boolean;
  covers: {
    coverName: string;
    price: string;
    displayText: string;
    description: string;
    selected: boolean;
    tag: string;
  }[];
}

const Button = styled(Box)`
  background: #4f34d2;
  border-radius: 6px;
  color: #fff;
  font-size: 12px;
  padding: 7px 11px;
  text-align: center;
  width: 60px;
`;

const Elipses = styled(Text)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledRadio = styled.input`
  position: relative;
  &:after {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid #8990a1;
    position: absolute;
    background: #fff;
    left: -2px;
    top: -2px;
  }
  &:checked {
    &:after {
      border 5px solid #8990a1;
    }
  }
`;

const CoverItem = ({
  additionalCover
}: {
  additionalCover: AdditionalCover;
}) => {
  const firstCover = additionalCover.covers[0];
  return (
    <Box>
      {additionalCover.covers.length === 1 ? (
        <Flex>
          <div style={{ flexGrow: 1 }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                justifyContent: "center"
              }}
            >
              {additionalCover.image ? (
                <img src={additionalCover.image} alt="" />
              ) : (
                <PlaceHolder />
              )}
            </div>
          </div>
          <div style={{ flexGrow: 10 }}>
            <Box width="160px">
              <Text size="normal">{firstCover.displayText}</Text>
              <Elipses size="xxxs">{firstCover.description}</Elipses>
            </Box>
          </div>
          <div style={{ flexGrow: 1 }}>
            <Button>₹{firstCover.price}</Button>
          </div>
        </Flex>
      ) : (
        <Box>
          <Flex alignItems="center">
            <div style={{ flexGrow: 1 }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                {additionalCover.image ? (
                  <img src={additionalCover.image} alt="" />
                ) : (
                  <PlaceHolder />
                )}
              </div>
            </div>
            <div style={{ flexGrow: 10 }}>
              <Box>
                <Text size="small">{additionalCover.title}</Text>
              </Box>
            </div>
          </Flex>
          {additionalCover.covers.map(cover => (
            <Box key={cover.coverName} margin="10px 0">
              <Flex>
                <div style={{ flexGrow: 1 }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <StyledRadio type="radio" name={additionalCover.title} />
                  </div>
                </div>
                <div style={{ flexGrow: 10 }}>
                  <Box width="160px">
                    <Text size="xs">{cover.displayText}</Text>
                    <Elipses size="xxxs">{cover.description}</Elipses>
                  </Box>
                </div>
                <div style={{ flexGrow: 1 }}>
                  <Button>₹{cover.price}</Button>
                </div>
              </Flex>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CoverItem;
