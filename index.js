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
      const directory = nextConfig.assetDirectory || 'public';

      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              publicPath: `${prefix}/_next/${directory}/videos/`,
              outputPath: `${isServer ? '../' : ''}${directory}/videos/`,
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
