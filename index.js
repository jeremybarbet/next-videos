module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options;

      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const prefix = nextConfig.assetPrefix || '';
      const basePath = nextConfig.basePath || '';

      config.module.rules.push({
        test: /\.(mp4|webm|mov|ogg|swf|ogv)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              publicPath: `${prefix || basePath}/_next/static/videos/`,
              outputPath: `${isServer ? '../' : ''}static/videos/`,
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};