import type { H3Event } from "h3";
import { readBody } from "h3";

export const ASCII_ART = `
    -=[ teapot ]=-

       _...._
     .'  _ _ \`.
    | ."\` ^ \`". _,
    \\_;\`"---"\`|//
      |       ;/
      \\_     _/
        \`""""\`
`;

export const ROBOT_TXT = `User-agent: *
Disallow: /deny
`;

export const ANGRY_ASCII = `
          .-''''''-.
        .' _      _ '.
       /   O      O   \\
      :                :
      |                |
      :       __       :
       \\  .-"\`  \`"-.  /
        '.          .'
          '-......-'
`;

export const ENV_HEADERS = [
  "x-varnish",
  "x-request-start",
  "x-heroku-queue-depth",
  "x-real-ip",
  "x-forwarded-proto",
  "x-forwarded-protocol",
  "x-forwarded-ssl",
  "x-heroku-queue-wait-time",
  "x-forwarded-for",
  "x-heroku-dynos-in-use",
  "x-forwarded-port",
  "x-request-id",
  "via",
  "total-route-time",
  "connect-time",
];

export function getClientIP(event: H3Event): string {
  const headers = getRequestHeaders(event);
  return (
    (headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    (headers["x-real-ip"] as string) ||
    event.node.req.socket.remoteAddress ||
    ""
  );
}

export function getRequestHeaders(event: H3Event): Record<string, string> {
  const headers = event.node.req.headers;
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(headers)) {
    if (typeof value === "string") {
      result[key] = value;
    } else if (Array.isArray(value)) {
      result[key] = value.join(", ");
    }
  }

  return result;
}

export function getUserAgent(event: H3Event): string {
  const headers = event.node.req.headers;
  return (headers["user-agent"] as string) || "";
}

export function getOrigin(event: H3Event): string {
  return getClientIP(event);
}

export async function getRequestData(event: H3Event) {
  const req = event.node.req;
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host || "localhost";
  const url = `${protocol}://${host}${req.url}`;
  
  const headers = getRequestHeaders(event);
  const method = event.method;
  
  let data: any = {};
  let json: any = null;
  let form: any = {};
  let files: any = {};

  const contentType = headers["content-type"] || "";

  if (method !== "GET" && method !== "HEAD") {
    try {
      const body = await readBody(event).catch(() => null);
      if (body) {
        if (contentType.includes("application/json")) {
          json = body;
          data = body;
        } else if (
          contentType.includes("application/x-www-form-urlencoded") ||
          contentType.includes("multipart/form-data")
        ) {
          form = body;
          data = body;
        } else {
          data = body;
        }
      }
    } catch (e) {
      // Body might be empty or already consumed
    }
  }

  // Parse query parameters
  const args: Record<string, string> = {};
  const urlObj = new URL(url);
  urlObj.searchParams.forEach((value, key) => {
    args[key] = value;
  });

  return {
    args,
    data,
    files,
    form,
    headers,
    json,
    origin: getClientIP(event),
    url,
  };
}

export function parseAcceptHeader(acceptHeader: string): string[] {
  if (!acceptHeader) return [];
  
  return acceptHeader
    .split(",")
    .map((part) => {
      const [type] = part.trim().split(";");
      return type;
    })
    .filter(Boolean);
}

export function checkBasicAuth(
  event: H3Event,
  expectedUser: string,
  expectedPass: string
): boolean {
  const authHeader = event.node.req.headers["authorization"] as string;
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return false;
  }

  const base64Credentials = authHeader.slice(6);
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
  const [user, pass] = credentials.split(":");

  return user === expectedUser && pass === expectedPass;
}

export function checkBearerAuth(event: H3Event): string | null {
  const authHeader = event.node.req.headers["authorization"] as string;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }

  return authHeader.slice(7);
}
