import { getRequestData } from "../utils/helpers";

export default defineEventHandler(async (event) => {
  return await getRequestData(event);
});
