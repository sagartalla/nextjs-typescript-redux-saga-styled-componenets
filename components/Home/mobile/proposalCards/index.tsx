import React from "react";
import Link from "next/link";

import {
  styled,
  Flex,
  Box,
  $fontWeightLight,
  $grayLight,
  $neutralColors
} from "@acko-ui-kit/common";
import { H6, SubHeading, Price } from "@acko-ui-kit/typography";
import { HyperAnchorLink } from "@acko-ui-kit/button";
import Card from "@acko-ui-kit/card";
import PolicyDetailsCard from "./policyDetailsCard";
import PlanTypes from "./planTypes";
import Car from "../../../../public/images/car.png";
import { ProposalProps } from "../../types.d";
import { getInrFormat } from "../../../../utils";
import { PLAN_MAPPING } from "../../../../utils/mapping";

// declare let REDIRECTION_URL: string;

const REDIRECTION_URL = "";

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
const StyledFlex = styled(Flex)`
  border-top: 0.5px solid ${$grayLight};
  border-right: 0.5px solid ${$grayLight};
  position: relative;
`;

const StyledSpan = styled.span`
  font-weight: ${$fontWeightLight};
  font-size: 9px;
  color: ${$neutralColors.light};
`;

const BasicHyperLinkStyles = `
  border-top: 0.5px solid ${$grayLight};
  position: relative;
  padding: 0.6em;
  width: 45%;
  justify-content: center;
  font-size: 0.75rem;
  align-items: center;
  &:after {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HyperAnchorLinkStyled = styled(HyperAnchorLink)`
  ${BasicHyperLinkStyles}
`;

interface ComponentProps {
  data: ProposalProps[];
}
const HOST_URL = "hey";

function getCtaButton(item: any) {
  let ctaButton;
  const { redirect_link: redirectLink } = item;
  const [lastPage, proposal] = redirectLink.split("/"); //

  if (["plan_detail", "checkout", "payment", "plans"].includes(lastPage)) {
    let url = "";

    // TODO : this is a temporary fix
    if (lastPage.includes("payment")) {
      url = `${HOST_URL}payment/?universal=true&okind=ackore_proposal&oid=${
        redirectLink.split("=")[1]
      }`;
    } else {
      url = REDIRECTION_URL + redirectLink;
    }

    ctaButton = (
      <HyperAnchorLinkStyled href={url} small="true" chevron="true">
        Continue Search
      </HyperAnchorLinkStyled>
    );
  } else {
    ctaButton = (
      <Link href={`/car/car-type${proposal}`} passHref>
        <HyperAnchorLinkStyled chevron="true" small="true">
          Continue search
        </HyperAnchorLinkStyled>
      </Link>
    );
  }
  return ctaButton;
}

export default function yourProposals({ data }: ComponentProps): JSX.Element {
  return (
    <>
      {data && data.length > 0 && <StyledH6>Recent Search</StyledH6>}
      {data &&
        data.map(item => (
          <StyledCard noPadding key={item.id}>
            <Flex padding="1em 1em 0 1em">
              <Box width="65%">
                <StyledPlanHeading size="xxxs" colorVariant="neutral">
                  {item.plans && item.plans.length === 1
                    ? (PLAN_MAPPING as any)[item.plans[0].plan_type]
                    : "CONTINUE YOUR SEARCH"}
                </StyledPlanHeading>
                <PolicyDetailsCard
                  vehicleMmv={item.mmv}
                  registrationNumber={item.registration_number}
                />
              </Box>
              <Flex width="35%" alignItems="center" overflow="hidden">
                <img src={Car} alt="car" />
              </Flex>
            </Flex>
            {item.plans && item.plans.length > 1 ? (
              <Flex padding="0 1em 1em 1em ">
                <PlanTypes
                  policyCards={item.plans}
                  redirectLink={item.redirect_link}
                />
              </Flex>
            ) : (
              <Flex margin="0.75em 0 0 0">
                <StyledFlex
                  width="55%"
                  padding="0.5em 0 0.5em 1em"
                  alignItems="center"
                >
                  {item.plans && item.plans.length === 1 ? (
                    <Flex alignItems="center">
                      <StyledSpan>Killer prices for you &nbsp;</StyledSpan>
                      <Price colorVariant="accent" size="xs">
                        {getInrFormat(item.plans[0].premium)}
                      </Price>
                    </Flex>
                  ) : (
                    <StyledSpan>To get the Best Price</StyledSpan>
                  )}
                </StyledFlex>
                {getCtaButton(item)}
              </Flex>
            )}
          </StyledCard>
        ))}
    </>
  );
}
