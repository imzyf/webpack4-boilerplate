# eslint

> https://eslint.org/docs/user-guide/getting-started

```bash
npm install eslint --save-dev

npx eslint --init
```

```bash
npm i eslint-import-resolver-webpack -D
```

package.json 被修改的地方：

```json
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-import-resolver-webpack": "^0.12.1",
    "eslint-loader": "^3.0.3",
    "eslint-plugin-import": "^2.20.0",
    "eslint-plugin-vue": "^6.1.2",
```

创建 .eslintrc.js：

```js
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:vue/essential", "airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {},
  globals: {},
  settings: {
    "import/resolver": {
      webpack: {
        config: "./config/webpack.dev.config.js"
      }
    }
  }
};
```

---

其中遇到的一个错误：

```bash
error: Missing file extension for "@/components/..." (import/extensions) at ...
```

错误原因是：eslint-loader 不能解析 @，解决方案：

```bash
npm i eslint-import-resolver-webpack -D
```

修改 .eslintrc.js 设置如下：

```js
  'settings': {
    "import/resolver": {
      webpack: {
        config: "./config/webpack.common.config.js"
      }
    }
  }
```

---

创建 .eslintignore：

```txt
/dist
/node_modules
```

> https://github.com/webpack-contrib/eslint-loader

```bash
npm install eslint-loader --save-dev
```

在 webpack.common.config.js 修改：

```js
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            // options、query 不能和 loader 数组一起使用
            cacheDirectory: true, // 利用缓存提高性能，babel is slow
          },
        }, {
          loader: 'eslint-loader',
        }],
      },
    ...
    ]
  }
```

在 package.json 添加：

```json
  "scripts": {
    "eslint": "eslint . --fix",
    ...
  }
```

```bash
npm run eslint
```
