import { getRequestData } from "../utils/helpers";

export default defineEventHandler(async (event) => {
  const data = await getRequestData(event);
  return {
    ...data,
    method: event.method,
  };
});
