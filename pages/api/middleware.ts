import express from "express";
import cookies from "../../utils/cookies";
import SERVICE_ORIGINS from "../../utils/constants";

const handler = (req: express.Request, res: express.Response) => {
  res.cookie("x-test-header", "api-middleware!"); // remove later
  fetch(`${SERVICE_ORIGINS.TEMP_SERVICE}/users`).then(apiRes => {
    apiRes.json().then(data => {
      res.end(JSON.stringify(data));
    });
  });
};

export default cookies(handler);
