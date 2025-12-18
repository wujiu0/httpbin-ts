export default defineEventHandler(() => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>httpbin-ts - HTTP Request & Response Service</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
      line-height: 1.6;
    }
    h1 { color: #333; }
    code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 3px;
    }
    a { color: #0066cc; }
  </style>
</head>
<body>
  <h1>httpbin-ts</h1>
  <p>A TypeScript/Nitro implementation of HTTP Request & Response Service</p>
  <h2>Endpoints</h2>
  <ul>
    <li><code><a href="/ip">/ip</a></code> - Returns Origin IP</li>
    <li><code><a href="/uuid">/uuid</a></code> - Returns UUID</li>
    <li><code><a href="/user-agent">/user-agent</a></code> - Returns user-agent</li>
    <li><code><a href="/headers">/headers</a></code> - Returns headers</li>
    <li><code><a href="/get">/get</a></code> - Returns GET data</li>
    <li><code>/post</code> - Returns POST data</li>
    <li><code>/put</code> - Returns PUT data</li>
    <li><code>/patch</code> - Returns PATCH data</li>
    <li><code>/delete</code> - Returns DELETE data</li>
    <li><code><a href="/anything">/anything</a></code> - Returns request data for any HTTP method</li>
    <li><code><a href="/status/418">/status/:code</a></code> - Returns given HTTP Status code</li>
    <li><code><a href="/delay/3">/delay/:n</a></code> - Delays responding for n seconds</li>
    <li><code>/basic-auth/:user/:passwd</code> - Basic Auth</li>
    <li><code>/bearer</code> - Bearer Auth</li>
    <li><code><a href="/json">/json</a></code> - Returns JSON</li>
    <li><code><a href="/html">/html</a></code> - Returns HTML</li>
    <li><code><a href="/xml">/xml</a></code> - Returns XML</li>
    <li><code><a href="/robots.txt">/robots.txt</a></code> - Returns robots.txt</li>
    <li><code><a href="/cookies">/cookies</a></code> - Returns cookie data</li>
    <li><code>/cookies/set/:name/:value</code> - Sets a cookie</li>
    <li><code><a href="/redirect/5">/redirect/:n</a></code> - 302 redirect n times</li>
    <li><code><a href="/cache">/cache</a></code> - Returns cacheable response</li>
    <li><code><a href="/cache/60">/cache/:value</a></code> - Returns response cached for n seconds</li>
    <li><code><a href="/etag/test">/etag/:etag</a></code> - Returns response with ETag</li>
    <li><code><a href="/image">/image</a></code> - Returns image based on Accept header</li>
    <li><code><a href="/image/png">/image/png</a></code> - Returns PNG image</li>
    <li><code><a href="/image/jpeg">/image/jpeg</a></code> - Returns JPEG image</li>
    <li><code><a href="/image/webp">/image/webp</a></code> - Returns WebP image</li>
    <li><code><a href="/image/svg">/image/svg</a></code> - Returns SVG image</li>
    <li><code><a href="/base64/SFRUUEJJTiBpcyBhd2Vzb21l">/base64/:value</a></code> - Decodes base64 string</li>
    <li><code><a href="/bytes/1024">/bytes/:n</a></code> - Returns n random bytes</li>
    <li>And more...</li>
  </ul>
  <h2>Description</h2>
  <p>Testing an HTTP Library can become difficult sometimes. A simple service is provided here that allows developers to test their libraries in a simple and elegant way.</p>
  <p>This is a TypeScript/Nitro port of the original <a href="https://httpbin.org">httpbin.org</a> service.</p>
</body>
</html>`;
});
