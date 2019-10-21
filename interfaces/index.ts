// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

import { Store } from "redux";
import { NextPage, NextPageContext } from "next";

export type User = {
  id: number
  name: string
}

export interface NextPageContextExtended extends NextPageContext {
  store: Store;
  isServer: boolean;
};

export interface NextPageExtended<P, IP = P> extends NextPage<P,IP> {
  propTypes: object
};
