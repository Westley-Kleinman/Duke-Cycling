import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: "export",
  // Use basePath only in prod (GitHub Pages). Local dev runs at "/".
  basePath: isProd ? "/Duke-Cycling" : undefined,
  // Ensure any images are not optimized server-side (export-compatible)
  images: { unoptimized: true },
};

export default nextConfig;
