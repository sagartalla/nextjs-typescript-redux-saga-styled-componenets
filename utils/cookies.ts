import express, { CookieOptions } from "express";
import { serialize, CookieSerializeOptions } from "cookie";

/* Hack interface because express.CookieOptions has problems with res.cookie */
interface CustomResponce {
  cookie(name: string, val: string, options: CookieOptions): void;
  setHeader(name: string, value: string): void;
}

/**
 * This sets `cookie` on `res` object
 */
const cookie = (res: CustomResponce) => (
  name: string,
  val: string,
  options: CookieOptions
) => {
  const stringValue =
    typeof val === "object" ? `j:${JSON.stringify(val)}` : String(val);
  if (options && "maxAge" in options) {
    const modifiedOptions: { maxAge: number; expires: Date } = {
      maxAge: options.maxAge || 0,
      expires: new Date()
    };
    modifiedOptions.expires = new Date(Date.now() + modifiedOptions.maxAge);
    modifiedOptions.maxAge /= 1000;
  }
  res.setHeader(
    "Set-Cookie",
    serialize(name, String(stringValue), options as CookieSerializeOptions)
  );
};

/**
 * Adds `cookie` function on `res.cookie` to set cookies for response
 */
const cookies = (handler: Function) => (
  req: express.Request,
  res: CustomResponce
) => {
  res.cookie = cookie(res);
  return handler(req, res);
};

export default cookies;
