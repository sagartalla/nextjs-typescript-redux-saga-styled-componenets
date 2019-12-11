import React from "react";
import styled from "styled-components";
import { Text } from "@acko-ui-kit/typography";
import { Flex, Box } from "@acko-ui-kit/common";

interface RadioProps {
  header: string;
  label: string;
  isSelected: boolean;
  color: string;
  labelColor: string;
  name: string;
}

const StyledInput = styled.input`
  padding: 0;
  margin-left: 0;
  margin-right: 8px;
`;

const Radio = ({
  header,
  label,
  isSelected,
  color,
  name,
  labelColor
}: RadioProps) => {
  return (
    <Box>
      <Text size="xxxs" color={labelColor}>
        {label ? header : <span>{"\u00A0"}</span>}
      </Text>
      <Flex alignItems="flex-end">
        <StyledInput type="radio" name={name} defaultChecked={isSelected} />
        <Text size="xxs" color={color}>
          {label || header}
        </Text>
      </Flex>
    </Box>
  );
};

const IDVSelection = ({
  theme,
  prices
}: {
  theme: { label: string; text: string };
  prices: { lowest: string; recomended: string };
}) => {
  const radioOptions = [
    {
      header: "For Lowest Price",
      label: `₹${parseInt(prices.lowest, 10) / 100000} L`,
      isSelected: true
    },
    {
      header: "Recommended",
      label: `₹${parseInt(prices.recomended, 10) / 100000} L`,
      isSelected: false
    },
    {
      header: "Custom IVD",
      label: "",
      isSelected: false
    }
  ];
  return (
    <Box mt="30px">
      <Flex>
        {radioOptions.map(item => (
          <Radio
            {...item}
            key={item.header}
            color={theme.text}
            labelColor={
              item.header === "Recommended" ? theme.label : theme.text
            }
            name="insurance-types"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default IDVSelection;
