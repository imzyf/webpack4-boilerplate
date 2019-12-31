const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  // 输出文件
  output: {
    filename: "[name]@[chunkhash].js"
  },
  // 第三方插件
  plugins: [new webpack.HashedModuleIdsPlugin()],
  // webpack4.x 新增配置项
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`
    }
  }
});
