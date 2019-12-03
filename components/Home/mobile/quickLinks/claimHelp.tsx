import React from "react";
import styled from "styled-components";

import { Text } from "@acko-ui-kit/typography";
import { Flex, Box } from "@acko-ui-kit/common";
import { UserDataProps, MmvProps } from "../../types.d";
import ClaimIllustration from "../../../../public/images/make-claim-illustration.png";
import CallSupportSvg from "../../../../public/images/call-support.svg";

const ClaimIllustrationImage = styled.img`
  width: 150px;
  height: 150px;
`;

const CallSupportIcon = styled(CallSupportSvg)`
  margin-right: 1em;
`;

const HelpLineButton = styled.a`
  padding: 1em 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background-color: #f6f6f9;
  text-decoration: none;
`;

interface ComponentProps {
  mmv: MmvProps;
  userData: UserDataProps;
}

export default function ClaimHelp({
  mmv,
  userData
}: ComponentProps): JSX.Element {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Text size="normal" fontWeight="bold">
        Hi {userData.name ? userData.name : userData.phone}!
      </Text>
      <Box margin="0.5em 0 2em" textAlign="center">
        <Text size="xxs" fontWeight="normal">
          Had trouble with your {`${mmv.make} ${mmv.model}`}?
        </Text>
      </Box>
      <Box textAlign="center">
        <ClaimIllustrationImage src={ClaimIllustration} />
      </Box>
      <Box margin="2em 0 0.5em" textAlign="center">
        <Text>You’re in safe hands</Text>
      </Box>
      <Box textAlign="center" mb="1.5em">
        <Text size="xs" fontWeight="normal" colorVariant="neutral">
          Call our support team on the number below & register your claim.
        </Text>
      </Box>
      <HelpLineButton href="tel:+18602662256">
        <CallSupportIcon />
        <Text>1860 266 2256</Text>
      </HelpLineButton>
    </Flex>
  );
}
