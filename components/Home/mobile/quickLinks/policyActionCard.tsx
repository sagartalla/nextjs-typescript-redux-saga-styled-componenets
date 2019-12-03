import React, { useState } from "react";
import styled from "styled-components";

import Card from "@acko-ui-kit/card";
import { Text } from "@acko-ui-kit/typography";
import { Flex, Box, $grayLight } from "@acko-ui-kit/common";
import VehicleNumber from "../../../Common/mobile/VehicleNumber";
import { UserDataProps, PolicyProps } from "../../types.d";

import { PLAN_MAPPING } from "../../../../utils/mapping";
import Claim from "./claimHelp";

// images
import DownloadIcon from "../../../../public/images/download-icon.svg";
import ChevronRightIcon from "../../../../public/images/chevron-right.svg";
import EditIcon from "../../../../public/images/edit-icon.svg";

const { HOST_URL } = process.env;

const StyledCard = styled(Card)`
  border-radius: 10px;
  background-color: ${$grayLight};
  margin-bottom: 1em;
`;
const PlanTypeText = styled(Text)`
  text-transform: uppercase;
`;
const CarNameText = styled(Text)`
  text-transform: capitalize;
  margin-top: 0.2em;
`;

const StyledFlex = styled(Flex)`
  height: 400px;
`;
const VehicleNumberContainer = styled(Box)``;

function getIcon(type: string): JSX.Element {
  let icon;
  switch (type) {
    case "download":
      icon = <DownloadIcon />;
      break;
    case "edit":
      icon = <EditIcon />;
      break;
    default:
      icon = <ChevronRightIcon />;
      break;
  }
  return icon;
}
interface Props {
  data: PolicyProps[];
  cardType: string;
  handleClick: Function;
  userData: UserDataProps;
}

interface PolicyHelpParamInterface {
  cardType: string;
  selectedPolicy: PolicyProps;
  userData: UserDataProps;
}

const policyHelp = ({
  cardType,
  selectedPolicy,
  userData
}: PolicyHelpParamInterface): JSX.Element => {
  switch (cardType) {
    case "claim":
      return <Claim mmv={selectedPolicy.mmv} userData={userData} />;
    default:
      return <></>;
  }
};

export default function PolicyActionCard(props: Props): JSX.Element {
  const { data, cardType, handleClick, userData } = props;

  const [selectedPolicy, policyDetails] = useState();

  const handleSelect = (item: PolicyProps): void => {
    switch (cardType) {
      case "claim":
        policyDetails(item);
        handleClick();
        break;
      case "download":
        window.open(`${HOST_URL}/policy/document/${item.id}.pdf`, "_blank");
        break;
      case "edit":
        window.location.assign(`${HOST_URL}/policy/?pid=${item.id}`);
        break;
      default:
        break;
    }
  };

  if (data.length > 0)
    return (
      <>
        {!selectedPolicy
          ? data.map(
              (item): JSX.Element => (
                <StyledCard
                  key={item.id}
                  onClick={(): void => handleSelect(item)}
                >
                  <Flex alignItems="center">
                    <Flex flexDirection="column">
                      <PlanTypeText colorVariant="neutral" size="xxxs">
                        {(PLAN_MAPPING as any)[item.plan_type]}
                      </PlanTypeText>
                      <CarNameText size="medium">{item.mmv.make}</CarNameText>
                      <VehicleNumberContainer>
                        <VehicleNumber
                          noBackground
                          value={item.registration_number}
                        />
                      </VehicleNumberContainer>
                    </Flex>
                    <Box width="initial">{getIcon(cardType)}</Box>
                  </Flex>
                </StyledCard>
              )
            )
          : policyHelp({ cardType, selectedPolicy, userData })}
      </>
    );
  return (
    <StyledFlex justifyContent="center" alignItems="center">
      <Text colorVariant="light" size="s">
        Oops No Policies Found
      </Text>
    </StyledFlex>
  );
}
