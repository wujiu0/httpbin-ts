import { ROBOT_TXT } from "../utils/helpers";

export default defineEventHandler((event) => {
  event.node.res.setHeader("content-type", "text/plain");
  return ROBOT_TXT;
});
