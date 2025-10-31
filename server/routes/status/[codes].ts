export default defineEventHandler((event) => {
  const codes = getRouterParam(event, "codes");
  
  if (!codes) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }

  // Parse codes - can be single code or comma-separated codes
  const codeList = codes.split(",").map((c) => parseInt(c.trim(), 10));
  
  // Filter valid status codes (100-599)
  const validCodes = codeList.filter((code) => code >= 100 && code <= 599);
  
  if (validCodes.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
    });
  }

  // Select random code if multiple provided
  const statusCode =
    validCodes.length === 1
      ? validCodes[0]
      : validCodes[Math.floor(Math.random() * validCodes.length)];

  // Set the response status
  event.node.res.statusCode = statusCode;

  // Return empty response for most status codes
  // Special case for 418 (I'm a teapot)
  if (statusCode === 418) {
    return `
    -=[ teapot ]=-

       _...._
     .'  _ _ \`.
    | ."\` ^ \`". _,
    \\_;\`"---"\`|//
      |       ;/
      \\_     _/
        \`""""\`
`;
  }

  return "";
});
