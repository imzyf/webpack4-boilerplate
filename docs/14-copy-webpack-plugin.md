# copy-webpack-plugin

> https://github.com/webpack-contrib/copy-webpack-plugin

```bash
npm install copy-webpack-plugin --save-dev
```

在 webpack.common.config.js 添加：

```js
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  ...
  plugins: [
    ...
    new CopyPlugin([
      {
        from: "static",
        to: "static",
        ignore: [".DS_Store"],
      },
    ]),
  ],
};
```
