export default defineEventHandler((event) => {
  const valueParam = getRouterParam(event, "value");
  const maxAge = parseInt(valueParam || "0", 10);

  event.node.res.setHeader("Cache-Control", `public, max-age=${maxAge}`);

  return {
    message: `This response is cached for ${maxAge} seconds`,
    timestamp: new Date().toISOString(),
  };
});
