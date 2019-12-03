import React, { useState } from "react";
import styled from "styled-components";

import { H7, Text } from "@acko-ui-kit/typography";
import { Row, Col } from "@acko-ui-kit/layout";
import IconText from "./iconText";
import PolicyActionCard from "./policyActionCard";

import { PolicyProps, UserDataProps } from "../../types.d";
import Modal from "../../../Common/mobile/modal";
import {
  MAKE_CLAIM,
  DOWNLOAD_POLICY,
  RENEW_ACKO_POLICY,
  EDIT_POLCY
} from "../../../../utils/mapping";

const Wrapper = styled.div`
  margin-top: 20px;
`;

function getModalComponent(
  name: string,
  policyData: PolicyProps[],
  handleClick: Function,
  userData: UserDataProps
): JSX.Element | null {
  let component;
  switch (name) {
    case MAKE_CLAIM:
      component = (
        <PolicyActionCard
          data={policyData}
          cardType="claim"
          handleClick={handleClick}
          userData={userData}
        />
      );
      break;
    case DOWNLOAD_POLICY:
      component = (
        <PolicyActionCard
          data={policyData}
          cardType="download"
          handleClick={() => console.log("here")}
          userData={userData}
        />
      );
      break;
    case RENEW_ACKO_POLICY:
      component = <p>Renew policy details will come here</p>;
      break;
    case EDIT_POLCY:
      component = (
        <PolicyActionCard
          data={policyData}
          cardType="edit"
          handleClick={() => console.log("here")}
          userData={userData}
        />
      );
      break;
    default:
      component = null;
      break;
  }
  return component;
}

function getModalHeader(name: string): string {
  switch (name) {
    case MAKE_CLAIM:
      return "Select a policy to make claim";
    case DOWNLOAD_POLICY:
      return "Select a policy to download";
    case RENEW_ACKO_POLICY:
      return "Select a policy to renew";
    case EDIT_POLCY:
      return "Select a policy to Edit";
    default:
      return "";
  }
}

function QuickLinks(props: ComponentProps): JSX.Element {
  const [modalType, toggleModal] = useState("");
  const [heading, changeHeading] = useState("");
  const { policyData, loggedInStatus, renderData, userData } = props;

  const handleClick = (): void => changeHeading("");

  return (
    <>
      <Wrapper>
        <H7>Quick Links</H7>
        <Row>
          {renderData.map(
            (card: DataProps): JSX.Element => (
              <Col key={card.key} xxs={1 / 2}>
                <IconText
                  data={card}
                  handleClick={(): void => {
                    if (loggedInStatus) {
                      toggleModal(card.text);
                      changeHeading(card.text);
                    } else {
                      console.log("hey");
                    }
                  }}
                />
              </Col>
            )
          )}
        </Row>
      </Wrapper>
      <Modal
        variant="large"
        align="left"
        header={
          <Text size="normal" fontWeight="bold">
            {getModalHeader(heading)}
          </Text>
        }
        show={!!modalType}
        onHide={(): void => toggleModal("")}
      >
        {getModalComponent(modalType, policyData, handleClick, userData)}
      </Modal>
    </>
  );
}

interface ComponentProps {
  renderData: any;
  policyData: any;
  userData: any;
  loggedInStatus: any;
  history: any;
}
interface DataProps {
  icon: string;
  text: string;
  link: string;
  key: string;
}

export default QuickLinks;
