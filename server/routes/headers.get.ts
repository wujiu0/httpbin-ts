import { getRequestHeaders } from "../utils/helpers";

export default defineEventHandler((event) => {
  return {
    headers: getRequestHeaders(event),
  };
});
