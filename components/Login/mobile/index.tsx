import React from "react";
import { Flex, Box } from "@acko-ui-kit/common";
import { Text } from "@acko-ui-kit/typography";

// import Img from "../../../assets/svg/login-main.svg";

const Login = () => {
  return (
    <>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        mt="2em"
      >
        <Box>
          <Text>Login</Text>
        </Box>
        <Box mt="0.5em" mb="2em" textAlign="center" width="70%">
          <Text size="xxs" colorVariant="neutral" fontWeight="normal">
            Login to access your cart, policies, claims and special offers.
          </Text>
          {/* <Img /> */}
        </Box>
      </Flex>
    </>
  );
};
export default Login;
