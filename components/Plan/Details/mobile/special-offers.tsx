import React from "react";
import styled from "styled-components";
import Card from "@acko-ui-kit/card";
import { Box, Flex } from "@acko-ui-kit/common";
import { H6, Text } from "@acko-ui-kit/typography";
import Placeholder from "../../../../public/images/plan/details/special-offer-placeholder.svg";

interface Offer {
  displayText: string;
  tag: string;
  description: string;
  image: string;
}

const CustomCard = styled(Card)`
  position: relative;
  padding: 5%;
  margin-bottom: 24px;
`;

const Tag = styled(Box)`
  background: #f4f5f7;
  border-radius: 10px;
  text-align: center;
  padding: 4px 20px;
  width: fit-content;
`;

const SpecialOffers = ({ offers }: { offers: Offer[] }) => (
  <CustomCard>
    <H6>Special offers for you</H6>
    <Box>
      {offers.map(offer => (
        <Box key={offer.displayText} pt="20px">
          <Flex alignItems="flex-start">
            <Box width="fit-content" height="fit-content" mr="10px">
              {offer.image ? (
                <img
                  src={offer.image} // TODO: remove placeholder
                  alt={offer.displayText}
                />
              ) : (
                <Placeholder />
              )}
            </Box>
            <Box>
              <Box>
                <Flex alignItems="center">
                  <Box width="fit-content" mr="10px">
                    <Text size="xxs">{offer.displayText}</Text>
                  </Box>
                  <Box width="fit-content">
                    <Tag>
                      <Text size="xxxs">{offer.tag}</Text>
                    </Tag>
                  </Box>
                </Flex>
              </Box>
              <Box width="70%" mt="5px">
                <Text size="xxxs" color="#48484A">
                  {offer.description}
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  </CustomCard>
);

export default SpecialOffers;
