# 处理 CSS

- css-loader 使你能够使用类似 @import 和 url(...) 的方法实现 require() 的功能。
- style-loader 将所有的计算后的样式加入页面中； 二者组合在一起使你能够把样式表嵌入 webpack 打包后的 JS 文件中。

```bash
npm install css-loader style-loader -D
```

修改在 webpack.dev.conf.js 文件，新增 module 配置，添加如下代码：

```js
...
// 加载器 loader 配置项
module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
  ]
}
```

新建 src/css/reset.css 文件，并添加如下代码：

```css
body {
  margin: 0;
  padding: 0;
  color: red;
}
```

在入口文件 src/index.js 顶部引入该样式文件：

```js
import "./css/reset.css";
```

## postcss-loader

> https://github.com/postcss/postcss-loader

```bash
npm i -D postcss-loader postcss-import postcss-preset-env cssnano
```

postcss.config.js

```js
module.exports = {
  parser: file.extname === ".sss" ? "sugarss" : false,
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {},
    cssnano: env === "production" ? options.cssnano : false
  }
};
```

## scss-loader

```bash
npm install sass-loader node-sass -D
```

```js
{
  test: /\.scss$/,
  use: [
    "style-loader",
    { loader: "css-loader", options: { importLoaders: 1 } },
    "postcss-loader",
    "sass-loader"
  ]
}
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
  devServer,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
```
