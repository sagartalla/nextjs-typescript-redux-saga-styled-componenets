import express from 'express'
import LRUCache from 'lru-cache';
import next from 'next'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = new LRUCache<string, string>();
ssrCache.max = 100 * 1024 * 1024;
ssrCache.maxAge = 1000 * 60 * 60 * 24 * 30;
/*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req: express.Request) {
    return `${req.path}`
}

async function renderAndCache(req: express.Request, res: express.Response) {
    const key = getCacheKey(req);

    // If we have a page in the cache, let's serve it
    if (ssrCache.has(key)) {
        //console.log(`serving from cache ${key}`);
        res.setHeader('x-cache', 'HIT');
        res.send(ssrCache.get(key));
        return
    }
    try {
        //console.log(`key ${key} not found, rendering`);
        // If not let's render the page into HTML
        let html = await app.renderToHTML(req, res, req.path, req.query);
        html = html || '';
        // Something is wrong with the request, let's skip the cache
        if (res.statusCode !== 200) {
            res.send(html);
            return
        }

        // Let's cache this page
        ssrCache.set(key, html);

        res.setHeader('x-cache', 'MISS');
        res.send(html)
    } catch (err) {
        app.renderError(err, req, res, req.path, req.query)
    }
}

app.prepare().then(() => {
  const server = express();
  server.get('/_next/*', (req, res) => {
    /* serving _next static content using next.js handler */
    handle(req, res);
  });
  server.get('*', (req, res) => {
    /* serving page */
    return renderAndCache(req, res)
  });

  server.listen(port, (err) => {
    if (err) throw err;
    // tslint:disable-next-line:no-console
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? 'development' : process.env.NODE_ENV
      }`
    )
  })




})
