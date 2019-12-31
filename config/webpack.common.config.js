const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 入口文件配置项
  entry: path.resolve(__dirname, "../src/index.js"),
  // 输出文件配置项
  output: {
    path: path.resolve(__dirname, "../dist")
    // filename: "js/[name].[hash].js",
    // chunkFilename: "js/[name].[chunkhash].js"
  },
  // 插件配置项
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // 输出文件的名称
      template: path.resolve(__dirname, "../src/index.html"), // 模板文件的路径
      title: "home - webpack" // 配置生成页面的标题
    })
  ],

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
