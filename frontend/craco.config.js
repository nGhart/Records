const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { paths }) => {
      webpackConfig.resolve.fallback = {
        path: require.resolve('path-browserify'),
        zlib: require.resolve('browserify-zlib'),
        querystring: require.resolve('querystring-es3'),
        http: require.resolve('stream-http'),
        url: require.resolve('url/'),
        buffer: require.resolve('buffer/'),
        util: require.resolve('util/'),
        stream: require.resolve('stream-browserify'),
        assert: require.resolve('assert/'),
        crypto: require.resolve('crypto-browserify'),
        fs: false,
        net: false,
      };

      return webpackConfig;
    },
  },
};
