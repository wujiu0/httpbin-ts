export default defineEventHandler((event) => {
  const name = getRouterParam(event, "name");
  const value = getRouterParam(event, "value");

  if (name && value) {
    event.node.res.setHeader("Set-Cookie", `${name}=${value}; Path=/`);
  }

  // Redirect to /cookies to show the set cookie
  return sendRedirect(event, "/cookies", 302);
});
