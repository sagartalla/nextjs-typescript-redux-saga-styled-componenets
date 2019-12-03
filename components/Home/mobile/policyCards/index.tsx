import React from "react";

import {
  styled,
  $fontWeightLight,
  $grayLight,
  Flex,
  Box
} from "@acko-ui-kit/common";
import { H6, SubHeading } from "@acko-ui-kit/typography";
import { HyperAnchorLink } from "@acko-ui-kit/button";
import Card from "@acko-ui-kit/card";
import PolicyDetailsCard from "./policyDetailsCard";
import Chevron from "../../../../public/images/chevron-right-blue-circle.svg";
import Car from "../../../../public/images/car.png";
import { PolicyProps } from "../../types.d";
import { PLAN_MAPPING } from "../../../../utils/mapping";

const { HOST_URL } = process.env;
const StyledH6 = styled(H6)`
  margin-top: 36px;
`;

const StyledCard = styled(Card)`
  margin: 1em 0;
`;

const StyledPlanHeading = styled(SubHeading)`
  margin-bottom: 0.5em;
  font-weight: ${$fontWeightLight};
`;
const CustomAnchorLink = styled(HyperAnchorLink)`
  border-top: 0.5px solid ${$grayLight};
  position: relative;
  alignitems: center;
  justifycontent: center;
  padding: 1.2em;
  margin-top: 0.5em;
`;

const StyledChevron = styled(Chevron)`
  position: absolute;
  right: 1em;
`;

interface ComponentProps {
  data: PolicyProps[];
}

export default function YourPolicies({ data }: ComponentProps): JSX.Element {
  return (
    <>
      {data && data.length > 0 && <StyledH6>Your Policies</StyledH6>}
      {data &&
        data.map(item => (
          <StyledCard noPadding key={item.id}>
            <Flex padding="1em 1em 0 1em">
              <Box width="65%">
                <StyledPlanHeading size="xxxs" colorVariant="neutral">
                  {(PLAN_MAPPING as any)[item.plan_type]}
                </StyledPlanHeading>
                <PolicyDetailsCard
                  vehicleMmv={item.mmv}
                  registrationNumber={item.registration_number}
                  expiryDate={item.expiry_date ? item.expiry_date : ""}
                />
              </Box>
              <Flex width="35%" alignItems="center" overflow="hidden">
                <img src={Car} alt="car" />
              </Flex>
            </Flex>
            <CustomAnchorLink
              href={`${HOST_URL}/policy/?pid=${item.id}`}
              small="true"
            >
              <Flex justifyContent="center">Claim, Download or Edit</Flex>
              <StyledChevron />
            </CustomAnchorLink>
          </StyledCard>
        ))}
    </>
  );
}
