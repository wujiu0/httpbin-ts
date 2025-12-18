import { randomUUID } from "crypto";

export default defineEventHandler(() => {
  return {
    uuid: randomUUID(),
  };
});
