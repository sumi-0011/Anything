import type { StorybookConfig } from "@storybook/nextjs";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin')

const path = require('path')

const toPath = _path => path.join(process.cwd(), _path)

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath('storybook-dark-mode'),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async config => ({
    ...config,
    resolve: {
      ...(config.resolve || {}),
      plugins : [
        ...(config.resolve?.plugins || []),
        new TsconfigPathsPlugin({}),
      ],
      alias: {
        ...(config.resolve?.alias || {}),
        '@emotion/core': toPath('node_modules/@emotion/react'),
      },
    },
  }), 
  babel: async (options) => {
    options.presets!.push('@emotion/babel-preset-css-prop');
    options.presets!.push(['@babel/preset-typescript', { allowDeclareFields: true }]);

    return options;
  },
};
export default config;
