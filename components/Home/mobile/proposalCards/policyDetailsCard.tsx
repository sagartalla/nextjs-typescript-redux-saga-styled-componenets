import React from "react";

import {
  styled,
  Flex,
  $error,
  $fontSize,
  $neutralColors
} from "@acko-ui-kit/common";
import { H5 } from "@acko-ui-kit/typography";
import VehicleNumber from "../../../Common/mobile/VehicleNumber";
import Calender from "../../../../public/images/calender.svg";
import formatDate from "../../../../utils/date";

const StyledH5 = styled(H5)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledCalender = styled(Calender)<StyleProps>`
  margin-right: 0.5em;
  rect {
    stroke: ${(props: any) => (props.renewal ? $error : "black")};
  }
  path {
    stroke: ${(props: any) => (props.renewal ? $error : "black")};
  }
`;
const StyledText = styled.p<StyleProps>`
  font-size: ${$fontSize.xxxs};
  color: ${(props: any) => (props.renewal ? $error : $neutralColors.dark)};
  font-style: italic;
  padding-top: 2px;
  margin: 0;
`;

interface StyleProps {
  renewal?: boolean;
}
interface ComponentProps {
  expiryDate?: string;
  renewal?: boolean;
  vehicleMmv: MmvProps;
  registrationNumber: string;
}
interface MmvProps {
  make: string;
  model: string;
  variant: string;
}

export default function PolicyDetailsCard({
  vehicleMmv,
  registrationNumber,
  expiryDate,
  renewal
}: ComponentProps) {
  return (
    <>
      <StyledH5>
        {vehicleMmv.make} {vehicleMmv.model}
      </StyledH5>
      <VehicleNumber value={registrationNumber} noBackground={renewal} />
      {expiryDate && (
        <Flex alignItems="center" mt="0.6em">
          <StyledCalender renewal={renewal} />
          <StyledText renewal={renewal}>
            Expires on {formatDate(expiryDate, "DMMMYY")}
          </StyledText>
        </Flex>
      )}
    </>
  );
}
