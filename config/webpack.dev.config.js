const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const devServer = require("./dev.server.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  // 输出文件
  output: {
    filename: "[name].[hash].js"
  },
  // 开发服务
  devServer,
  // 第三方插件
  plugins: [
    // 模块热更新 使用
    new webpack.HotModuleReplacementPlugin()
    // 分析包
    // new BundleAnalyzerPlugin(),
  ]
});
