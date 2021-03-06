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
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {},
  globals: {},
  settings: {
    "import/resolver": {
      webpack: {
        config: "./config/webpack.common.config.js"
      }
    }
  }
};
