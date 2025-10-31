export default defineEventHandler((event) => {
  const ifModifiedSince = event.node.req.headers["if-modified-since"];
  const ifNoneMatch = event.node.req.headers["if-none-match"];

  if (ifModifiedSince || ifNoneMatch) {
    event.node.res.statusCode = 304;
    return "";
  }

  const lastModified = new Date().toUTCString();
  const etag = `"${Math.random().toString(36).substring(7)}"`;

  event.node.res.setHeader("Last-Modified", lastModified);
  event.node.res.setHeader("ETag", etag);
  event.node.res.setHeader("Cache-Control", "public, max-age=3600");

  return {
    message: "This response should be cached",
    timestamp: new Date().toISOString(),
  };
});
