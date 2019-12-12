import React from "react";
import styled from "styled-components";
import { Text } from "@acko-ui-kit/typography";
import { Box, Flex } from "@acko-ui-kit/common";
import PlaceholderImg from "../../../../../public/images/plan/details/placeholder.svg";
import IDVSelection from "../../../../Common/mobile/idv-selection";

interface BannerProps {
  color: string;
  planName: string;
  image: string;
  tagType: string;
  subHeading: string;
  superTag: string;
  prices: {
    lowest: string;
    recomended: string;
    custom: {
      min: string;
      max: string;
      current: string;
      breakPoint: string;
    };
  };
}

const getBannerTheme: (
  colorCode: string
) => { bg: string; text: string; label: string } = colorCode => {
  let a = { bg: "#FFFFFF", text: "#000", label: "#3EB753" };
  switch (colorCode) {
    case "0":
      a = { bg: "#5A68E7", text: "#fff", label: "#FFC400" };
      break;
    case "1":
      a = { bg: "#E5E9FE", text: "#000", label: "#3EB753" };
      break;
    default:
      a = { bg: "#FFFFFF", text: "#000", label: "#3EB753" };
      break;
  }
  return a;
};

const BannerWrap = styled.div<{ bg: string }>`
  background-color: ${(props: any) => props.bg};
  height: 328px;
  padding: 5%;
`;

const TypeTag = styled.span`
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  font-size: 10px;
  padding: 3px 10px;
  color: #fff;
  height: fit-content;
  margin-left: 10px;
`;

const TopTag = styled.span`
  position: absolute;
  right: 0;
  top: 3%;
  background: #ffc400;
  font-size: 8px;
  line-height: 15px;
  padding: 2px 10px;
`;

const Banner = ({
  color,
  planName,
  image,
  subHeading,
  tagType,
  prices,
  superTag
}: BannerProps) => {
  const bannerTheme = getBannerTheme(color);
  return (
    <BannerWrap bg={bannerTheme.bg}>
      <Box padding="0 0 0 10px">
        {image ? <img src={image} alt={image} /> : <PlaceholderImg />}
      </Box>
      <TopTag>{superTag}</TopTag>
      <Box mt="28px">
        <Flex alignItems="center">
          <Text color={bannerTheme.text} size="large">
            {planName}
          </Text>
          <TypeTag>
            <span>{tagType}</span>
          </TypeTag>
        </Flex>
      </Box>
      <Box margin="12px 0">
        <Text color={bannerTheme.text} size="xxs">
          {subHeading}
        </Text>
      </Box>
      <Text color={bannerTheme.text} size="large">
        {/* TODO: Add common util for currency conversion. */}
        {`Insured Value ₹${parseInt(prices.lowest, 10) / 100000} L`}
      </Text>
      <IDVSelection theme={bannerTheme} prices={prices} />
    </BannerWrap>
  );
};

export default Banner;
