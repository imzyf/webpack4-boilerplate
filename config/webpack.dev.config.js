const merge = require('webpack-merge');
const webpack = require('webpack');
// eslint-disable-next-line no-unused-vars
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common.config.js');
const devServer = require('./dev.server.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // 输出文件
  output: {
    filename: '[name].[hash].js',
  },
  // 开发服务
  devServer,
  // 第三方插件
  plugins: [
    // 模块热更新 使用
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],
});
