import { getRequestData } from "../../utils/helpers";

export default defineEventHandler(async (event) => {
  const path = getRouterParam(event, "path");
  const data = await getRequestData(event);
  
  return {
    ...data,
    method: event.method,
    path: `/${path}`,
  };
});
