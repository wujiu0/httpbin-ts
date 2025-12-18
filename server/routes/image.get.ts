import { parseAcceptHeader } from "../utils/helpers";

export default defineEventHandler((event) => {
  const acceptHeader = event.node.req.headers.accept || "";
  const acceptedTypes = parseAcceptHeader(acceptHeader);

  // Determine which image format to return based on Accept header
  if (
    acceptedTypes.includes("image/webp") ||
    acceptedTypes.includes("image/*")
  ) {
    return sendRedirect(event, "/image/webp", 302);
  } else if (acceptedTypes.includes("image/svg+xml")) {
    return sendRedirect(event, "/image/svg", 302);
  } else if (acceptedTypes.includes("image/png")) {
    return sendRedirect(event, "/image/png", 302);
  } else if (acceptedTypes.includes("image/jpeg")) {
    return sendRedirect(event, "/image/jpeg", 302);
  }

  // Default to PNG
  return sendRedirect(event, "/image/png", 302);
});
