# httpbin-ts: HTTP Request & Response Service in TypeScript

A TypeScript/Nitro implementation of the HTTP Request & Response Service (httpbin).

## Overview

This project is a complete rewrite of the original [httpbin](https://httpbin.org) service using modern TypeScript and [Nitro](https://nitro.unjs.io/), a powerful web server framework. It provides a simple HTTP service for testing HTTP clients and libraries.

## Migration from Python/Flask

This repository has been migrated from Python/Flask to TypeScript/Nitro while maintaining API compatibility with the original httpbin service. The migration provides:

- **Modern TypeScript**: Type-safe code with better developer experience
- **Nitro Framework**: Fast, lightweight, and production-ready server
- **Easy Deployment**: Can be deployed to various platforms (Node.js, serverless, edge)
- **Better Performance**: Optimized builds and faster response times

## Features

- **HTTP Methods**: GET, POST, PUT, PATCH, DELETE
- **Auth Testing**: Basic Auth, Bearer Auth, Digest Auth
- **Status Codes**: Return any HTTP status code
- **Response Formats**: JSON, HTML, XML, robots.txt
- **Request Inspection**: Headers, IP, User-Agent
- **Utilities**: Delay, Base64, Bytes, UUID generation
- **And many more endpoints...**

## Installation

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The server will start at `http://localhost:3000`

## Build

Build for production:

```bash
npm run build
```

## Preview

Preview the production build:

```bash
npm run preview
```

## Available Endpoints

### Request Inspection
- `GET /ip` - Returns Origin IP
- `GET /uuid` - Returns a UUID
- `GET /user-agent` - Returns user-agent string
- `GET /headers` - Returns request headers

### HTTP Methods
- `GET /get` - Returns GET data
- `POST /post` - Returns POST data
- `PUT /put` - Returns PUT data
- `PATCH /patch` - Returns PATCH data
- `DELETE /delete` - Returns DELETE data

### Status Codes
- `GET/POST/... /status/:codes` - Returns given HTTP Status code
  - Example: `/status/418` returns HTTP 418 (I'm a teapot)
  - Can accept multiple codes: `/status/200,201,400` (returns random one)

### Response Formats
- `GET /json` - Returns JSON
- `GET /html` - Returns HTML document
- `GET /xml` - Returns XML document
- `GET /robots.txt` - Returns robots.txt

### Authentication
- `GET /basic-auth/:user/:passwd` - Challenges HTTP Basic Auth
- `GET /bearer` - Challenges HTTP Bearer Auth

### Utilities
- `GET/POST/... /delay/:n` - Delays response for n seconds (max 10)
- `GET /base64/:value` - Decodes base64 encoded string
- `GET /bytes/:n` - Returns n random bytes (max 100KB)

## Project Structure

```
httpbin-ts/
├── server/
│   ├── routes/          # API route handlers
│   │   ├── index.get.ts
│   │   ├── ip.get.ts
│   │   ├── uuid.get.ts
│   │   ├── status/
│   │   ├── delay/
│   │   └── ...
│   └── utils/
│       └── helpers.ts   # Utility functions
├── nitro.config.ts      # Nitro configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Nitro
- **Language**: TypeScript
- **HTTP Layer**: h3

## License

MIT License - Same as the original httpbin project

## Credits

- Original httpbin by Kenneth Reitz
- TypeScript/Nitro implementation
