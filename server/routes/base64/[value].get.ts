export default defineEventHandler((event) => {
  const value = getRouterParam(event, "value");

  if (!value) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }

  try {
    const decoded = Buffer.from(value, "base64").toString("utf-8");
    event.node.res.setHeader("content-type", "text/html; charset=utf-8");
    return decoded;
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid base64",
    });
  }
});
