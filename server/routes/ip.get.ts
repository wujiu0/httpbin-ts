import { getClientIP } from "../utils/helpers";

export default defineEventHandler((event) => {
  return {
    origin: getClientIP(event),
  };
});
