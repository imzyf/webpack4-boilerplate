# resolve

> https://webpack.js.org/configuration/resolve/

```js
resolve: {
    // 配置路径映射
    alias: {
        vue$: "vue/dist/vue.esm.js",
        "@": path.resolve(__dirname, "../src"),
        Pages: path.resolve(__dirname, 'src/pages'),
        Components: path.resolve(__dirname, 'src/components')
    }
},
```
