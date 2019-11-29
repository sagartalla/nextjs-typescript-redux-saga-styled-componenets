import React, { memo } from "react";
import PropTypes from "prop-types";
import { styled } from "@acko-ui-kit/common";
import Close from "../../../../public/images/close.svg";

const CloseButtonWrapper = styled.button`
  position: absolute;
  right: 0;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  ${(props: { align?: string }) =>
    props.align === "center" && "justify-content: center"};
  align-items: center;
`;

function ModalHeader(props: HeaderProps): JSX.Element {
  const { header, closeButton, onClick, align } = props;
  return (
    <Wrapper align={align}>
      {header}
      {closeButton && (
        <CloseButtonWrapper type="button" onClick={onClick}>
          <Close />
        </CloseButtonWrapper>
      )}
    </Wrapper>
  );
}

interface HeaderProps {
  header: JSX.Element | undefined;
  closeButton: boolean;
  onClick(): void;
  align?: string;
}

ModalHeader.propTypes = {
  closeButton: PropTypes.bool,
  onClick: PropTypes.func,
  header: PropTypes.node,
  align: PropTypes.string
};

ModalHeader.defaultProps = {
  closeButton: false,
  onClick: () => null,
  header: <div />,
  align: ""
};

export default memo(ModalHeader);
