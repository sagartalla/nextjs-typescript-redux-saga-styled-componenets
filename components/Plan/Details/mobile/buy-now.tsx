import React from "react";
import styled from "styled-components";
import { Text } from "@acko-ui-kit/typography";
import { Box, Flex } from "@acko-ui-kit/common";

interface PlanDetailsButtonProps {
  originalPrice: string;
  discountedPrice: string;
  gst: string;
}

const StyledBox = styled(Box)`
  height: 60px;
  background: #4f34d2;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: #fff;
  padding: 0 20%;
`;

const Container = styled(Box)`
  text-align: left;
`;

const OriginalPrice = styled(Text)`
  color: #b9c8fc;
  font-size: 9px;
  font-weight: 800;
  text-decoration: line-through;
  font-weight: normal;
`;

const DiscountedPrice = styled(Text)`
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
`;

const RupeeSign = styled(Text)`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  position: relative;
  top: -5px;
`;

const PlusGST = styled(Text)`
  font-weight: 800;
  font-size: 10px;
  line-height: 12px;
  margin-left: 0.5em;
`;

const BuyNow = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
`;

export default function PlanDetailsButton({
  originalPrice,
  discountedPrice
}: PlanDetailsButtonProps) {
  return (
    <StyledBox fluid>
      <Container>
        <OriginalPrice>₹{originalPrice} + GST</OriginalPrice>
        <Flex justifyContent="space-between">
          <Flex width="initial" alignItems="baseline">
            <RupeeSign colorVariant="white">₹</RupeeSign>
            <DiscountedPrice colorVariant="white">
              {discountedPrice}
            </DiscountedPrice>
            <PlusGST colorVariant="white">+ GST</PlusGST>
          </Flex>
          <BuyNow colorVariant="white">Buy Now</BuyNow>
        </Flex>
      </Container>
    </StyledBox>
  );
}
