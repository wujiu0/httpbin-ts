export default defineEventHandler((event) => {
  const nParam = getRouterParam(event, "n");
  const n = parseInt(nParam || "0", 10);

  if (n <= 0) {
    return {
      message: "Redirect finished",
    };
  }

  // Redirect to /redirect/:n-1
  return sendRedirect(event, `/redirect/${n - 1}`, 302);
});
