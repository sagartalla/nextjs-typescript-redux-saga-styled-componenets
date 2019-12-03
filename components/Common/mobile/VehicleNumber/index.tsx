import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import {
  $fontSize,
  $grayLight,
  $neutralColors,
  $white
} from "@acko-ui-kit/common";

const StyledSpan = styled.span<StyleProps>`
  border-radius: 4px;
  padding: ${props => (props.noPadding ? "" : "0.2em")};
  background-color: ${props => (props.noBackground ? $white : $grayLight)};
  font-size: ${$fontSize.xxxs};
  color: ${$neutralColors.dark};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Wrapper = styled.span`
  ${StyledSpan}: not(: last-child) {
    margin-right: 0.5em;
  }
`;

export default function VehicleNumber(props: ComponentProps): JSX.Element {
  const { value } = props;
  let vehicleNumber: string | string[] = "";

  if (value) {
    vehicleNumber = props.value.split(/(\d+)/).filter(el => el !== "");
  }

  return (
    <Wrapper>
      {Array.isArray(vehicleNumber) &&
        Array.from(Array(vehicleNumber.length), (_, i) => (
          <StyledSpan
            key={i}
            noBackground={props.noBackground}
            noPadding={props.noPadding}
          >
            {vehicleNumber[i]}
          </StyledSpan>
        ))}
    </Wrapper>
  );
}

interface ComponentProps {
  value: string;
  noBackground?: boolean;
  noPadding?: boolean;
}
interface StyleProps {
  noBackground?: boolean;
  noPadding?: boolean;
}

VehicleNumber.propTypes = {
  value: PropTypes.string.isRequired
};
