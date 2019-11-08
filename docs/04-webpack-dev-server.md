# webpack-dev-server

> https://github.com/webpack/webpack-dev-server

```bash
npm install webpack-dev-server -D
```

webpack-dev-server 的基本配置项：

- color（CLI only）console 中打印彩色日志。
- historyApiFallback 任意的 404 响应都被替代为 index.html。启用该配置后，项目中任何找不到的链接都会被强制链接到 index.html 页面。
- hot 启用 Webpack 的模块热替换特性。和 react 的热替换搭配使用。
- progress（CLI only）将编译进度输出到控制台。
- overlay 在浏览页面输出报错信息。

## 获取局域网 IP

移动端开发时，当需要在手机上查看效果时，需要通过局域网 IP 来访问网站。

```bash
npm install ip -D
```

在 config 创建 dev.server.js：

```js
const path = require("path");
const ip = require("ip").address();

module.exports = {
  port: 8070,
  contentBase: path.resolve(__dirname, "../dist"),
  historyApiFallback: true,
  host: ip,
  overlay: true,
  after(app, server, compiler) {
    console.log(`\n\n服务器地址 http://${ip}:${this.port}\n`);
  }
};
```

修改 webpack.dev.conf.js 文件：

```js
const devServer = require("./dev.server.js");

...
module.exports = {
  ...
  devServer
}
```

修改 package.json 文件：

```json
"server": "webpack-dev-server --config config/webpack.dev.config.js --color --progress"
```

## 最终

webpack.dev.conf.js

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devServer = require("./dev.server.js");

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
  mode: "development",
  // 插件配置项
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // 输出文件的名称
      template: path.resolve(__dirname, "../src/index.html"), // 模板文件的路径
      title: "home - webpack" // 配置生成页面的标题
    })
  ],
  devServer
};
```
