# clean-webpack-plugin

> https://github.com/johnagan/clean-webpack-plugin

清理历史打包的文件。

```bash
npm install --save-dev clean-webpack-plugin
```

在 webpack.common.config.js 添加：

```bash
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

  // 插件配置项
  plugins: [
    new CleanWebpackPlugin(),
    ...
  ],
```
