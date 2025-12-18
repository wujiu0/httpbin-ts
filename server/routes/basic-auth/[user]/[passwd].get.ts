import { checkBasicAuth } from "../../../utils/helpers";

export default defineEventHandler((event) => {
  const user = getRouterParam(event, "user") || "";
  const passwd = getRouterParam(event, "passwd") || "";

  if (!checkBasicAuth(event, user, passwd)) {
    event.node.res.setHeader("WWW-Authenticate", 'Basic realm="Fake Realm"');
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized",
    });
  }

  return {
    authenticated: true,
    user,
  };
});
