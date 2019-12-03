import React, { memo } from "react";
import { styled, $accentColors } from "@acko-ui-kit/common";
import PropTypes from "prop-types";
import { Text, SubHeading } from "@acko-ui-kit/typography";
import Card from "@acko-ui-kit/card";
import ChervronRight from "../../../../public/images/chevron-right.svg";

const StyledCard = styled(Card)<StyleProps>`
  display: flex;
  flex-direction: ${(props: any): string =>
    props.imagePosition === "bottom" ? `column` : `row`};
  box-shadow: ${(props: any): string =>
    props.imagePosition === "bottom" || props.highlight
      ? `0`
      : `0 4px 24px -10px rgba(96, 114, 121, 0.45)`};
  border-radius: 10px;
  margin: 0.5em 0 0.5em 0;
  padding: ${(props: any): string =>
    props.imagePosition === "bottom" ? `1em` : `0.625em`};
  align-items: ${(props: any): string =>
    props.imagePosition === "bottom" ? `flex-start` : `center`};
`;

const Icon = styled.div<StyleProps>`
  order: ${(props: any): string =>
    props.imagePosition === "bottom" ? `1` : `0`};
`;

const Content = styled.div<StyleProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  order: ${(props: any): string =>
    props.imagePosition === "bottom" ? `0` : `1`};
  margin-left: ${(props: any): string =>
    props.imagePosition === "bottom" ? `0` : `6px`};
`;

const Span = styled.span`
  font-weight: bold;
  color: ${$accentColors.normal};
`;

const ArrowIcon = styled(ChervronRight)`
  width: 10px;
`;

function IconText(props: ComponentProps): JSX.Element {
  const { data, imagePosition, handleClick } = props;
  const { text, highlight, icon } = data;
  const getHighlightedText = (): JSX.Element => {
    const parts = text.split(new RegExp(`(highlight)`, "gi"));
    return (
      <Text size="xxs" style={{ padding: "4px" }}>
        {parts.map(
          (part: string): JSX.Element =>
            part.toLowerCase() === "highlight".toLowerCase() ? (
              <Span key={data.highlight}>{data.highlight}</Span>
            ) : (
              <span key={part}>{part}</span>
            )
        )}
      </Text>
    );
  };

  const fontStyles = (): JSX.Element => {
    if (highlight) return getHighlightedText();
    return imagePosition === "bottom" ? (
      <SubHeading size="xxs">{text}</SubHeading>
    ) : (
      <Text size="xxs">{text}</Text>
    );
  };

  const IconImage = icon;

  return (
    <StyledCard
      imagePosition={imagePosition}
      highlight={highlight}
      onClick={() => handleClick()}
    >
      <Icon imagePosition={imagePosition}>
        <IconImage />
      </Icon>
      <Content imagePosition={imagePosition}>
        {fontStyles()}
        <ArrowIcon />
      </Content>
    </StyledCard>
  );
}

interface StyleProps {
  imagePosition?: string;
  highlight?: string;
}

interface ComponentProps {
  imagePosition?: string;
  data: DataProps;
  handleClick: Function;
}

interface DataProps {
  icon: string;
  text: string;
  link: string;
  highlight?: string;
}

IconText.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    highlight: PropTypes.string,
    link: PropTypes.string.isRequired
  }).isRequired,
  imagePosition: PropTypes.string.isRequired
};

export default memo(IconText);
