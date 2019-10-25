import LRUCache from "lru-cache";
import express from "express";

const ssrCache = new LRUCache<string, string>();
ssrCache.max = 100 * 1024 * 1024;
ssrCache.maxAge = 1000 * 60 * 60 * 24 * 30;
/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(path:string, req: express.Request) {
  return `${path || req.path}`;
}

export async function renderAndCache(
  app: any,
  req: express.Request,
  res: express.Response,
  path: string
) {
  const key = getCacheKey(path, req);
  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    // console.log(`serving from cache ${key}`);
    res.setHeader("x-cache", "HIT");
    res.send(ssrCache.get(key));
    return;
  }
  try {
    // console.log(`key ${key} not found, rendering`);
    // If not let's render the page into HTML
    let html = await app.renderToHTML(req, res, path || req.path, req.query);
    html = html || "";
    // Something is wrong with the request, let's skip the cache
    if (res.statusCode !== 200) {
      res.send(html);
      return;
    }

    // Let's cache this page
    ssrCache.set(key, html);

    res.setHeader("x-cache", "MISS");
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, req.path, req.query);
  }
}
