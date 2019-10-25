module.exports = {
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
    return config;
  }
};
