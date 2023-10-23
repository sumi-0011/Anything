const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false,
    forceSwcTransforms: true,
  },
  pageExtensions: ["page.tsx", "page.ts"],
  swcMinify: true,
  compiler: {
    emotion: true,
    reactRemoveProperties: isProd && {
      properties: ["^data-testid"],
    },
    removeConsole: isProd && {
      exclude: ["error", "warn"],
    },
  },
};

module.exports = nextConfig;
