# 分离 CSS

```bash
npm i mini-css-extract-plugin cross-env -D
```

在生产环境下把 style-loader 改为了 MiniCssExtractPlugin.loader。

webpack.prod.config.js 修改

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

  // 第三方插件
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    // 分离 CSS
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[name].[hash].css"
    })
  ],
```

webpack.common.config.js 修改

```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NODE_ENV = process.env.NODE_ENV;

      {
        test: /\.css$/,
        use: [
          {
            loader:
              NODE_ENV === "dev" ? "style-loader" : MiniCssExtractPlugin.loader
          },
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader:
              NODE_ENV === "dev" ? "style-loader" : MiniCssExtractPlugin.loader
          },
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
          "sass-loader"
        ]
      },
```

package.json 修改

```json
    "start": "cross-env NODE_ENV=dev webpack-dev-server --config config/webpack.dev.config.js --color --progress",
    "dev": "cross-env NODE_ENV=dev webpack --config config/webpack.dev.config.js",
    "prod": "cross-env NODE_ENV=prod webpack --config config/webpack.prod.config.js"
```
