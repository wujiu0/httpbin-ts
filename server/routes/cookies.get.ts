export default defineEventHandler((event) => {
  const cookieHeader = event.node.req.headers.cookie || "";
  const cookies: Record<string, string> = {};

  if (cookieHeader) {
    cookieHeader.split(";").forEach((cookie) => {
      const [name, ...rest] = cookie.trim().split("=");
      if (name && rest.length > 0) {
        cookies[name] = rest.join("=");
      }
    });
  }

  return { cookies };
});
