import React from "react";

import { styled, Flex, $grayLight } from "@acko-ui-kit/common";
import Card from "@acko-ui-kit/card";
import { H7, Price } from "@acko-ui-kit/typography";
import { HyperAnchorLink } from "@acko-ui-kit/button";
import { PlanProps } from "../../types.d";
import { getInrFormat } from "../../../../utils";
import { SMALL_CASE_PLAN_MAPPING } from "../../../../utils/mapping";

const StyledCard = styled(Card)`
  background-color: ${$grayLight};
  padding: 0.75em 1em;
  margin-top: 0.75em;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  ${StyledCard}:not(:last-child) {
    margin-bottom: 0.75em;
  }
`;
// declare let REDIRECTION_URL: string;
const REDIRECTION_URL = "";

export default function PlanTypes({
  policyCards,
  redirectLink
}: ComponentProps): JSX.Element {
  return (
    <Wrapper>
      {policyCards.map(plan => (
        <StyledCard key={plan.plan_type}>
          <Flex justifyContent="space-between" alignItems="center">
            <div>
              <H7>{(SMALL_CASE_PLAN_MAPPING as any)[plan.plan_type]}</H7>
              <Flex alignItems="center">
                <Price size="xxs" colorVariant="accent">
                  {getInrFormat(plan.discounted_premium)}
                </Price>
                <Price size="xxxs" colorVariant="light" strikeThrough>
                  {getInrFormat(plan.premium)}
                </Price>
              </Flex>
            </div>
            <HyperAnchorLink
              href={REDIRECTION_URL + redirectLink}
              small="small"
              chevron="true"
            >
              Buy Now
            </HyperAnchorLink>
          </Flex>
        </StyledCard>
      ))}
    </Wrapper>
  );
}

interface ComponentProps {
  policyCards: PlanProps[];
  redirectLink: string;
}
