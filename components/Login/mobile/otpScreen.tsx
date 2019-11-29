import React from "react";
import { styled, Flex, Box } from "@acko-ui-kit/common";
import { Text } from "@acko-ui-kit/typography";
import { ButtonText } from "@acko-ui-kit/button";
import FormikInput from "@acko-ui-kit/form";
import EditIconSVg from "../../../public/images/edit-icon-black.svg";
import validate from "../../../utils/validate";

interface OtpScreenProps {
  onVerifyOtp: Function;
  onSendOtp: Function;
  onToggleVerifyOtpScreen: Function;
  mobileNumber: string;
}

const EditIcon = styled(EditIconSVg)`
  margin-left: 0.5em;
`;

const ResendOtpText = styled(Text)`
  margin-right: 0.5em;
`;

function OtpScreen({
  onVerifyOtp,
  onSendOtp,
  mobileNumber,
  onToggleVerifyOtpScreen
}: OtpScreenProps) {
  return (
    <Flex mt="-20px" flexDirection="column" alignItems="center">
      <Text>Otp has been send to</Text>
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Text>{mobileNumber}</Text>
        <EditIcon onClick={() => onToggleVerifyOtpScreen(false)} />
      </Flex>
      <Box mt="1.3em" mb="0.75em" textAlign="center">
        <Text size="xxs" colorVariant="neutral" fontWeight="normal">
          Enter Otp
        </Text>
      </Box>
      <FormikInput
        placeholder="*     *     *     *"
        name="otp"
        type="number"
        initialValue=""
        validate={validate.otp}
        buttonText="Login"
        handleNext={(otp: string) => {
          onVerifyOtp({ phone: mobileNumber.toString(), otp: otp.toString() });
        }}
      />
      <Flex justifyContent="center" mt="1em">
        <ResendOtpText size="xxxs" colorVariant="neutral" fontWeight="normal">
          Didn&apos;t receive OTP?
        </ResendOtpText>
        <ButtonText
          small="true"
          onClick={() => {
            onSendOtp({ phone: mobileNumber.toString() });
          }}
        >
          <Text size="xxxs" colorVariant="hyperlink">
            {" "}
            Retry here
          </Text>
        </ButtonText>
      </Flex>
    </Flex>
  );
}

export default OtpScreen;
