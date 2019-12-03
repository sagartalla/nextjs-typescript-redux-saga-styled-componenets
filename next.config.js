/* eslint-disable */
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");
const webpack = require("webpack");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const env = dotenv.config();
dotenvExpand(env);

module.exports = withBundleAnalyzer({
  publicRuntimeConfig: {
    appEnv: process.env.APP_ENV
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push(
        {
          test: /\.(ts|tsx|js)$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
          options: {
            // eslint options (if necessary)
          }
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 100000
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        }
      );
    }
    /**
     * Returns environment variables as an object
     */
    const env = Object.keys(process.env).reduce((acc, envItem) => {
      acc[`process.env.${envItem}`] = JSON.stringify(process.env[envItem]);
      return acc;
    }, {});
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  }
});
