import express from "express";
import next from "next";
import urlHelpers from "url";

import "isomorphic-unfetch";

import { renderAndCache } from "./cacheing";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  console.log("uper");
  /* serving _next static content and apis using next.js handler */
  server.get(["/_next/*"], (req, res) => {
    handle(req, res);
  });
  server.get("/api/*", (req, res) => {
    handle(req, res, urlHelpers.parse(`/api/middleware`, true));
  });
  server.post("/api/*", (req, res) => {
    handle(req, res, urlHelpers.parse(`/api/middleware`, true));
  });
  server.get("*", (req, res) => {
    /* serving page */
    return renderAndCache(app, req, res, req.url);
  });

  server.listen(port, err => {
    if (err) throw err;
    // tslint:disable-next-line:no-console
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );
  });
});
