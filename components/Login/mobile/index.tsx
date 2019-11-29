import React, { useState } from "react";
import { Flex, Box } from "@acko-ui-kit/common";
import Toast from "@acko-ui-kit/toast";
import FormikInput from "@acko-ui-kit/form";
import { Text } from "@acko-ui-kit/typography";
import LoginMain from "../../../public/images/login-main.svg";
import OtpScreen from "./otpScreen";
import ModalLazyLoad from "../../Common/mobile/modal";
import { useSentOtp, useVerifiedOtp } from "./useCustomHooks";

import validate from "../../../utils/validate";

interface LoginScreenProps {
  onSendOtp: Function;
  onVerifyOtp: Function;
  mobileNumber: string;
  setOtpSent: Function;
  otpSent: boolean;
  otpVerified: boolean;
  setToastMessage: Function;
  toastMessage: string;
}

interface HandleToggleStateParams {
  setState: Function;
  state: boolean;
}

interface CloseVerifyOTPParams {
  setState: Function;
  state: boolean;
  setOtpSent: Function;
}

const handleToggleState = ({ setState, state }: HandleToggleStateParams) => {
  setState(!state);
};

const closeVerifyOtp = ({
  setState,
  state,
  setOtpSent
}: CloseVerifyOTPParams) => {
  handleToggleState({ setState, state });
  setOtpSent(false);
};

function LoginScreen(props: LoginScreenProps) {
  const [showVerifyOtp, setShowVerifyOtp] = useState(false);

  const {
    onSendOtp,
    onVerifyOtp,
    mobileNumber,
    setToastMessage,
    toastMessage,
    otpSent,
    setOtpSent,
    otpVerified
  } = props;

  useSentOtp({ otpSent, showVerifyOtp, setShowVerifyOtp });
  useVerifiedOtp({ otpVerified });

  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt="2em"
      >
        <Box mt="0.5em" textAlign="center">
          <Text>Login</Text>
        </Box>
        <Box mt="0.5em" mb="2em" textAlign="center" width="70%">
          <Text size="xxs" colorVariant="neutral" fontWeight="normal">
            Login to access your cart, policies, claims and special offers.
          </Text>
        </Box>
        <LoginMain />
        <Box mt="2em" mb="1em" textAlign="center">
          <Text size="xxs" colorVariant="neutral" fontWeight="normal">
            Your Mobile Number
          </Text>
        </Box>
        <FormikInput
          placeholder="900  000 0000"
          name="phoneNumber"
          type="number"
          initialValue=""
          validate={validate.phoneNumber}
          buttonText="Continue"
          handleNext={(value: string) => {
            onSendOtp({ phone: value.toString() });
          }}
        />
        <Box mt="1.5em" textAlign="center">
          <Text size="xxxs" colorVariant="neutral" fontWeight="normal">
            We will send an OTP to the above number.
          </Text>
        </Box>
      </Flex>
      <ModalLazyLoad
        align="left"
        header={<Text size="normal" fontWeight="bold" />}
        show={showVerifyOtp}
        onHide={() =>
          closeVerifyOtp({
            setState: setShowVerifyOtp,
            state: showVerifyOtp,
            setOtpSent
          })
        }
      >
        <OtpScreen
          onVerifyOtp={onVerifyOtp}
          onSendOtp={onSendOtp}
          mobileNumber={mobileNumber}
          onToggleVerifyOtpScreen={() =>
            closeVerifyOtp({
              setState: setShowVerifyOtp,
              state: showVerifyOtp,
              setOtpSent
            })
          }
        />
      </ModalLazyLoad>
      <Toast
        visible={!!toastMessage}
        toastMessage={toastMessage}
        handleToast={() => setToastMessage("")}
      />
    </>
  );
}

export default LoginScreen;
