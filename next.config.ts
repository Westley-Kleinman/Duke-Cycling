import type { NextConfig } from "next";

// GitHub Actions (configure-pages@v5 with static_site_generator: next)
// will automatically inject the correct basePath for the repository.
// Do NOT set basePath here to avoid double-prefixing assets in production.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
