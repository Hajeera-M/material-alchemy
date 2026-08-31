import { join, normalize } from "node:path";

type BunFile = Blob & { exists(): Promise<boolean> };

declare const Bun: {
  serve(options: {
    hostname: string;
    port: number;
    fetch(request: Request): Response | Promise<Response>;
  }): { hostname: string; port: number };
  file(path: string): BunFile;
};

// The production build creates this generated server entry before this adapter
// starts. It is intentionally loaded at runtime instead of bundled into the
// application source.
// @ts-expect-error Generated Nitro output has no source declaration.
const { default: nitro } = await import("../.output/server/index.mjs");

const publicRoot = join(process.cwd(), ".output", "public");
const port = Number(process.env["PORT"] ?? 5000);
const host = process.env["HOST"] ?? "0.0.0.0";

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

function publicFilePath(pathname: string) {
  const relativePath = pathname.replace(/^\/+/, "");
  const filePath = normalize(join(publicRoot, relativePath));
  return filePath.startsWith(publicRoot) ? filePath : null;
}

const server = Bun.serve({
  hostname: host,
  port,
  async fetch(request: Request) {
    const url = new URL(request.url);
    const filePath = publicFilePath(url.pathname);

    if (filePath) {
      const file = Bun.file(filePath);
      if (await file.exists()) {
        const extension = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
        return new Response(file, {
          headers: {
            "cache-control": "public, max-age=31536000, immutable",
            "content-type": contentTypes[extension] ?? "application/octet-stream",
          },
        });
      }
    }

    return nitro.fetch(request, {}, { waitUntil() {} });
  },
});

console.log(`Preview server listening on http://${server.hostname}:${server.port}`);
