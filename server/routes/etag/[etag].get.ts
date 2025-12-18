export default defineEventHandler((event) => {
  const etag = getRouterParam(event, "etag");
  const ifNoneMatch = event.node.req.headers["if-none-match"];

  if (ifNoneMatch && ifNoneMatch === `"${etag}"`) {
    event.node.res.statusCode = 304;
    return "";
  }

  event.node.res.setHeader("ETag", `"${etag}"`);

  return {
    message: "This response has an ETag",
    etag,
  };
});
