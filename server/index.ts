import express from "express";
import next from "next";
import MobileDetect from 'mobile-detect';

import { renderAndCache } from "./cacheing";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  /* serving _next static content and apis using next.js handler */
  server.get(["/_next/*", "/api/*"], (req, res) => {
    handle(req, res);
  });
  server.get("*", (req, res) => {
    /* serving page */
    const md = new MobileDetect(req.headers['user-agent'] || '');
    return renderAndCache(app, req, res, md.mobile() ? '/mobile' : '/desktop');
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
