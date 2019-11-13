# html-webpack-plugin

```bash
npm install html-webpack-plugin -D
```

在 src 创建 index.html：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title><%= htmlWebpackPlugin.options.title%></title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

修改 webpack.dev.conf.js 文件：

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

...
// 插件配置项
plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html', // 输出文件的名称
        template: path.resolve(__dirname, '../src/index.html'),// 模板文件的路径
        title:'home - webpack',// 配置生成页面的标题
    }),
]
```

## 最终

webpack.dev.conf.js

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  ]
};
```
