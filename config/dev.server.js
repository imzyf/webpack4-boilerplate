const path = require("path");

module.exports = {
  port: 8070,
  contentBase: path.resolve(__dirname, "../dist"),
  historyApiFallback: true,
  host: "0.0.0.0",
  overlay: true
};
