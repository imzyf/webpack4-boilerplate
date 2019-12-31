# babel-loader

> https://babeljs.io/

我现在觉得 babel 还是挺高深的，待细研究。2019-12-31 17:16:26

```bash
npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime core-js @babel/runtime-corejs3 -D
```

## .babelrc

```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3
      }
    ]
  ]
}
```

webpack.dev.conf.js 增加

```js
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            // options、query 不能和 loader 数组一起使用
            cacheDirectory: true // 利用缓存提高性能，babel is slow
          }
        }
      },
```

## 最终

webpack.dev.conf.js

```bash
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devServer = require("./dev.server.js");
const webpack = require("webpack");

module.exports = {
  // 入口文件配置项
  entry: path.resolve(__dirname, "../src/index.js"),
  // 输出文件配置项
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[hash].js",
    chunkFilename: "js/[name].[chunkhash].js"
  },
  // 环境配置项
  mode: "development",
  // 插件配置项
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // 输出文件的名称
      template: path.resolve(__dirname, "../src/index.html"), // 模板文件的路径
      title: "home - webpack" // 配置生成页面的标题
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            // options、query 不能和 loader 数组一起使用
            cacheDirectory: true // 利用缓存提高性能，babel is slow
          }
        }
      },
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
      },
      {
        test: /\.(png|jp?g|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // 小于 8192 字节的图片打包成 base 64 图片
              name: "images/[name].[hash:8].[ext]"
              // publicPath: ""
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src", "img:data-src"]
            }
          }
        ]
      },
      {
        // 文件依赖配置项 - 字体图标
        test: /\.(woff|woff2|svg|eot|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8192,
              name: "fonts/[name].[ext]?[hash:8]"
            }
          }
        ]
      },
      {
        // 文件依赖配置项 - 音频
        test: /\.(wav|mp3|ogg)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8192,
              name: "audios/[name].[ext]?[hash:8]"
            }
          }
        ]
      },
      {
        // 文件依赖配置项 - 视频
        test: /\.(ogg|mpeg4|webm)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8192,
              name: "videos/[name].[ext]?[hash:8]"
            }
          }
        ]
      }
    ]
  }
};
```
