const merge = require('webpack-merge');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'production',
  // 输出文件
  output: {
    filename: '[name]@[chunkhash].js',
  },
  // 第三方插件
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    // 分离 CSS
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[hash].css',
    }),
  ],
  // webpack4.x 新增配置项
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /node_modules\//,
          name: 'vendor',
          priority: 10,
          enforce: true,
          chunks: 'initial', // 只对入口文件处理
        },
        commons: {
          minChunks: 2, // 最少有两个文件共用的代码
          name: 'commons',
          enforce: true,
          chunks: 'all', // 针对所有文件
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
  },
});
