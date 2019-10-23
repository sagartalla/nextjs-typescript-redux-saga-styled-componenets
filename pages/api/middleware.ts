import express from "express";
import cookies from "../../utils/cookies";

const handler = (req: express.Request, res: express.Response) => {
  res.cookie("x-test-header", "api-middleware!");
  fetch("https://jsonplaceholder.typicode.com/users").then(apiRes => {
    apiRes.json().then(data => {
      res.end(JSON.stringify(data));
    });
  });
};

export default cookies(handler);
