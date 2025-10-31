# httpbin-ts: HTTP Request & Response Service

> **Note**: This repository has been migrated to TypeScript with Nitro!

A modern TypeScript/Nitro implementation of the HTTP Request & Response Service, originally created by [Kenneth Reitz](http://kennethreitz.org/bitcoin).

![ice cream](http://farm1.staticflickr.com/572/32514669683_4daf2ab7bc_k_d.jpg)

## 🚀 Quick Start

### Using npm

```sh
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Using Docker (TypeScript version)

```sh
# Build the Docker image
docker build -t httpbin-ts .

# Run the container
docker run -p 3000:3000 httpbin-ts
```

### Original Python version

The original Python version is still available:
```sh
docker pull kennethreitz/httpbin
docker run -p 80:80 kennethreitz/httpbin
```

See http://httpbin.org for more information about the original project.

## ✨ Why TypeScript/Nitro?

This migration brings several advantages:

- **Type Safety**: Full TypeScript support for better developer experience
- **Modern Stack**: Built on Nitro, a fast and lightweight web server framework
- **Better Performance**: Optimized builds and faster response times
- **Easy Deployment**: Deploy to Node.js, serverless platforms, or edge networks
- **Maintainability**: Cleaner, more maintainable code structure

## 📚 Documentation

For detailed API documentation and available endpoints, see [README-TS.md](./README-TS.md).

### Key Endpoints

- Request inspection: `/ip`, `/headers`, `/user-agent`
- HTTP methods: `/get`, `/post`, `/put`, `/patch`, `/delete`
- Auth testing: `/basic-auth/:user/:pass`, `/bearer`
- Status codes: `/status/:code`
- Response formats: `/json`, `/html`, `/xml`
- Utilities: `/delay/:n`, `/bytes/:n`, `/uuid`
- And many more...

## 🏗️ Project Structure

```
httpbin-ts/
├── server/
│   ├── routes/          # API route handlers (file-based routing)
│   └── utils/           # Utility functions
├── nitro.config.ts      # Nitro configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## 🌐 Original Project

Original httpbin by Kenneth Reitz:
- http://httpbin.org
- https://httpbin.org
- https://hub.docker.com/r/kennethreitz/httpbin/

## SEE ALSO

- http://requestb.in
- http://python-requests.org
- https://grpcb.in/

## 📄 License

MIT License - Same as the original httpbin project
