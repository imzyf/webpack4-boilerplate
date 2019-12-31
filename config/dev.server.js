const path = require("path");
const ip = require("ip").address();

module.exports = {
  port: 8070,
  contentBase: path.resolve(__dirname, "../dist"),
  historyApiFallback: true,
  host: ip,
  overlay: true,
  hot: true,
  inline: true,
  after(app, server, compiler) {
    console.log(`\n\n服务器地址 http://${ip}:${this.port}\n`);
  }
};
