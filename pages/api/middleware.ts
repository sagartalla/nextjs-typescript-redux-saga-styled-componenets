import express from "express";
import axios from "axios";
import cookies from "../../utils/cookies";
import SERVICE_ORIGINS from "../../utils/constants";

const handler = (req: express.Request, res: express.Response) => {
  console.log(req.header); // eslint-disable-line
  debugger; // eslint-disable-line
  res.cookie("x-test-header", "api-middleware!"); // remove later
  const url = req.url.replace("/api", "");
  const headers: any = { ...req.headers, "Content-Type": "application/json" };
  const options: any = {
    method: req.method,
    headers
  };
  if (req.body) {
    options.data = req.body;
  }

  axios
    .request({
      url: `${SERVICE_ORIGINS.TEMP_SERVICE}${url}`,
      ...options
    })
    .then(apiRes => {
      res.set(apiRes.headers);
      res.end(JSON.stringify(apiRes.data));
    });
};

export default cookies(handler);
