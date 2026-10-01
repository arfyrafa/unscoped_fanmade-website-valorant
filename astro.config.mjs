// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Ganti dengan domain deploy (Vercel/Netlify) supaya og:image & canonical jadi URL lengkap.
  site: "https://unscoped.vercel.app",
  trailingSlash: "always",
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  // URL lama (.html) diarahkan ke URL baru.
  redirects: {
    "/character.html": "/agents/",
    "/gameplay.html": "/gameplay/",
    "/news.html": "/news/",
    "/download.html": "/play/",
  },
});
