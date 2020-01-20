# Vue

> - https://cn.vuejs.org/v2/guide/
> - https://vue-loader.vuejs.org/zh/

```bash
npm install vue &&
npm install -D vue-loader vue-template-compiler
```

在 webpack.common.config.js 修改：

```bash
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}
```
