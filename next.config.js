const withPlugins = require("next-compose-plugins");
const withImages = require('next-images')
/* eslint-disable */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const aliases = require('./alias-config')

module.exports = withPlugins([ withBundleAnalyzer, withImages ], {
  publicRuntimeConfig: {
    appEnv: process.env.APP_ENV
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.(ts|tsx|js)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
        }
      });
    }
    // config.resolve.modules.push(__dirname);
    // config.resolve.extensions.push('.ts', '.tsx');
    const { alias } = config.resolve;
    config.resolve.alias = {
      ...alias,
      ...aliases
    };
    return config;
  }
});
