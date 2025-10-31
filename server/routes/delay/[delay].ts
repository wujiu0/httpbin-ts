import { getRequestData } from "../../utils/helpers";

export default defineEventHandler(async (event) => {
  const delayParam = getRouterParam(event, "delay");
  const delay = parseInt(delayParam || "0", 10);

  // Limit delay to 10 seconds
  const actualDelay = Math.min(Math.max(0, delay), 10);

  // Wait for the specified delay
  await new Promise((resolve) => setTimeout(resolve, actualDelay * 1000));

  return await getRequestData(event);
});
