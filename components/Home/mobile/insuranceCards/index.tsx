import React, { memo } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { styled, $neutralColors, $space, Flex } from "@acko-ui-kit/common";
import { Row, Col } from "@acko-ui-kit/layout";

import Card from "@acko-ui-kit/card";
import Button from "@acko-ui-kit/button";
import { Text, H4, H5 } from "@acko-ui-kit/typography";
import ChevronRight from "../../../../public/images/chevron-right.svg";

const StyledFlex = styled(Flex)`
  padding: 1em 0.75em;
`;

const CardRow = styled(Row)`
  margin-top: 1em;
  margin-bottom: 40px;
`;

const CardContainer = styled(Card)`
  background-position: bottom;
  background-size: contain;
  position: relative;
`;

const CtaButton = styled(Button)`
  position: absolute;
  bottom: -5%;
  width: 80%;
  left: 10%;
`;

const List = styled.ul`
  margin-top: 0;
  padding-left: 0.75em;
`;

const ListItem = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  &::before {
    content: "";
    height: 5px;
    width: 5px;
    background-color: ${$neutralColors.lightest};
    border-radius: 5px;
    margin-right: ${$space.xs};
  }
`;

const Heading = styled(H5)`
  margin-top: 1em;
`;

const handleClick = ({ card, router }: any) => {
  if (card.title === "Car") {
    router.push(card.redirectUrl);
  } else {
    window.location.assign(card.redirectUrl);
  }
};

function InsuranceCards(props: ComponentProps): JSX.Element {
  const { data } = props;
  const router = useRouter();
  return (
    <>
      <Heading>Paisa Vasool Insurance</Heading>
      <CardRow>
        {data.map(
          (card: InsuranceProps): JSX.Element => {
            const IconImage = card.bg;
            return (
              <Col xxs={1 / 2} key={card.title}>
                <CardContainer shadow="dark" noPadding>
                  <StyledFlex
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <H4>{card.title}</H4>
                    <ChevronRight />
                  </StyledFlex>
                  <List>
                    {card.details.map(
                      (detail: string): JSX.Element => (
                        <ListItem key={detail}>
                          <Text size="xs" color={$neutralColors.normal}>
                            {detail}
                          </Text>
                        </ListItem>
                      )
                    )}
                  </List>
                  <IconImage />

                  <CtaButton
                    small="true"
                    onClick={() => handleClick({ card, router })}
                  >
                    {card.buttonText}
                  </CtaButton>
                </CardContainer>
              </Col>
            );
          }
        )}
      </CardRow>
    </>
  );
}

interface ComponentProps {
  data: InsuranceProps[];
}

interface InsuranceProps {
  title: string;
  details: string[];
  bg: string;
  buttonText: string;
  url: string;
  redirectUrl: string;
}

InsuranceCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(PropTypes.string).isRequired,
      bg: PropTypes.node.isRequired,
      buttonText: PropTypes.string.isRequired,
      redirectUrl: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default memo(InsuranceCards);
