const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  compiler: {
    reactRemoveProperties: isProd && {
      properties: ["^data-testid"],
    },
    removeConsole: isProd && {
      exclude: ["error", "warn"],
    },
  },
};

module.exports = nextConfig;
