import express from "express";
import cookies from "../../utils/cookies";
import SERVICE_ORIGINS from "../../utils/constants";

const handler = (req: express.Request, res: express.Response) => {
  console.log(req.header); // eslint-disable-line
  debugger; // eslint-disable-line
  res.cookie("x-test-header", "api-middleware!"); // remove later
  fetch(`${SERVICE_ORIGINS.TEMP_SERVICE}${req.url.replace("/api", "")}`).then(
    apiRes => {
      apiRes.json().then(data => {
        res.end(JSON.stringify(data));
      });
    }
  );
};

export default cookies(handler);
