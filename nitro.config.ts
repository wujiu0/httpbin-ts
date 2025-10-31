import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2024-10-31",
  experimental: {
    openAPI: true,
  },
});
