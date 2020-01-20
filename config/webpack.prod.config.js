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
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
  },
});
