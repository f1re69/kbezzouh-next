const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:
      process.env.NODE_ENV === "production"
        ? ["www.kbezzouh.com"]
        : ["www.kbezzouh.com", "localhost:3000"],
  },
  webpack: (config, { isServer }) => {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        }),
      );
    }

    return config;
  },
};

module.exports = nextConfig;
