import { useEffect } from "react";

interface OnMountInterface {
  getProposals: Function;
}

interface OnUserInterface {
  mobileNumber: string | null;
  getPolicies: Function;
}

export const useOnMount = ({ getProposals }: OnMountInterface) => {
  useEffect(() => {
    getProposals();
  }, []);
};

export const useOnUser = ({ mobileNumber, getPolicies }: OnUserInterface) => {
  useEffect(() => {
    if (mobileNumber) {
      getPolicies();
    }
  }, [mobileNumber]);
};
