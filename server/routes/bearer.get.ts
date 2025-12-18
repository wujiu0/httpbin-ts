import { checkBearerAuth } from "../utils/helpers";

export default defineEventHandler((event) => {
  const token = checkBearerAuth(event);

  if (!token) {
    event.node.res.setHeader("WWW-Authenticate", 'Bearer realm="Fake Realm"');
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  return {
    authenticated: true,
    token,
  };
});
