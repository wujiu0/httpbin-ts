export default defineEventHandler((event) => {
  event.node.res.setHeader("Content-Type", "image/png");
  
  // Return a minimal 1x1 PNG image (smallest valid PNG)
  const pngBuffer = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    "base64"
  );
  
  return pngBuffer;
});
