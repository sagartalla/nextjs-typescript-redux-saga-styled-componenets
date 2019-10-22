import express from "express";
import next from "next";

import { renderAndCache } from "./cacheing";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get("/_next/*", (req, res) => {
    /* serving _next static content using next.js handler */
    handle(req, res);
  });
  server.get("*", (req, res) => {
    /* serving page */
    return renderAndCache(app, req, res);
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
