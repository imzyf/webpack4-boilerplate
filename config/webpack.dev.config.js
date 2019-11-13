const path = require("path");

module.exports = {
  // 入口文件配置项
  entry: path.resolve(__dirname, "../src/index.js"),
  // 输出文件配置项
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/bundle.js",
    publicPath: ""
  },
  // 环境配置项
  mode: "development"
};
