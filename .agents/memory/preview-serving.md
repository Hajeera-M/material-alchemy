---
name: Replit preview for Cloudflare Nitro output
description: How this imported TanStack Start project serves production assets in local Replit preview.
---

When the app is built with Nitro's Cloudflare-module preset, the generated server expects a Cloudflare `ASSETS` binding for static files. Local Replit preview does not provide that binding, so CSS, images and client bundles return 404 unless a small local adapter serves `.output/public` before delegating page requests to Nitro.

**Why:** The SSR response can return 200 while the browser is visibly unstyled and reports asset 404s.

**How to apply:** Keep the preview command as a build followed by the local adapter, and ensure the adapter supplies a minimal `waitUntil` context when forwarding requests to the generated handler.