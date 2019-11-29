import { useEffect } from "react";
import { useRouter } from "next/router";

interface SentOtpInterface {
  otpSent: boolean;
  showVerifyOtp: boolean;
  setShowVerifyOtp: Function;
}

interface VerifiedOtpInterface {
  otpVerified: boolean;
}

export const useSentOtp = ({
  otpSent,
  showVerifyOtp,
  setShowVerifyOtp
}: SentOtpInterface) => {
  useEffect(() => {
    if (otpSent && !showVerifyOtp) {
      setShowVerifyOtp(true);
    }
  }, [otpSent]);
};

export const useVerifiedOtp = ({ otpVerified }: VerifiedOtpInterface) => {
  const router = useRouter();
  useEffect(() => {
    if (otpVerified) {
      router.push("/");
    }
  }, [otpVerified]);
};
