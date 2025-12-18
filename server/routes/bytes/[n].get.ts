export default defineEventHandler((event) => {
  const nParam = getRouterParam(event, "n");
  const n = parseInt(nParam || "0", 10);

  // Limit to 100KB
  const numBytes = Math.min(Math.max(0, n), 102400);

  // Generate random bytes
  const buffer = Buffer.alloc(numBytes);
  for (let i = 0; i < numBytes; i++) {
    buffer[i] = Math.floor(Math.random() * 256);
  }

  event.node.res.setHeader("content-type", "application/octet-stream");
  return buffer;
});
