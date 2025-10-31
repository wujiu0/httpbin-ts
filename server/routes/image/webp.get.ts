export default defineEventHandler((event) => {
  event.node.res.setHeader("Content-Type", "image/webp");
  
  // Return a minimal WebP image
  const webpBuffer = Buffer.from(
    "UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
    "base64"
  );
  
  return webpBuffer;
});
