import { getUserAgent } from "../utils/helpers";

export default defineEventHandler((event) => {
  return {
    "user-agent": getUserAgent(event),
  };
});
