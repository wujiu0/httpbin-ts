export default defineEventHandler((event) => {
  event.node.res.setHeader("Content-Type", "image/svg+xml");
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="200" fill="#4CAF50"/>
  <text x="100" y="100" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
    SVG Image
  </text>
</svg>`;
});
