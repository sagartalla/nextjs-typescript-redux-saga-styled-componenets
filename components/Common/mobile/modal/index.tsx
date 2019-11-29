import React, { memo, useEffect } from "react";
// import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { styled, $white } from "@acko-ui-kit/common";
import ModalHeader from "./header";

const duration = 500;

const ModalWrapper = styled.div`
  background: ${$white};
  z-index: 1;
  border-radius: 16px 16px 0 0;
  width: 100%;
  position: fixed;
  ${(props: { variant?: string }): string =>
    props.variant === "large" ? "top: 6.5%" : "top: 50%"};
  bottom: 0;
  padding: 30px;
  overflow: scroll;
  &.modal-transition-enter {
    transform: translateY(100%);
  }
  &.modal-transition-enter-active {
    transition: transform ${duration}ms;
    transform: translateY(0);
  }
  &.modal-transition-exit {
    transform: translateY(0);
  }
  &.modal-transition-exit-active {
    transition: transform ${duration}ms;
    transform: translateY(100%);
  }
  box-sizing: border-box;
`;

const Overlay = styled.div`
  background-color: rgba(46, 46, 51, 0.66);
  height: 100%;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

const ModalBody = styled.div`
  margin-top: 25px;
`;

function Modal({
  children,
  header,
  show,
  onHide,
  variant,
  align
}: ModalProps): JSX.Element {
  // const domNode = document.getElementsByTagName("body")[0] as HTMLElement;

  useEffect(() => {
    const top: number = window.scrollY; // position of body scroll before opening modal
    if (show) {
      // fix position of body to disable scroll on modal open
      document.body.setAttribute("style", `position: fixed; top: -${top}px`);
    }
    return () => {
      document.body.setAttribute("style", "");
      // update position of body to initial scroll position on modal close
      window.scrollTo(0, parseInt(String(top) || "0", 10));
    };
  }, [
    show
    // ,top
  ]);

  return (
    <>
      {show && <Overlay onClick={onHide} />}
      <TransitionGroup component={null}>
        {show && (
          <CSSTransition timeout={duration} classNames="modal-transition">
            <ModalWrapper variant={variant}>
              <ModalHeader
                closeButton
                header={header}
                onClick={onHide}
                align={align}
              />
              <ModalBody>{children}</ModalBody>
            </ModalWrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
}

interface ModalProps {
  children: JSX.Element | null;
  header?: JSX.Element | undefined;
  show: boolean | string;
  onHide(): void;
  variant?: string;
  align?: string;
}

export default memo(Modal);
