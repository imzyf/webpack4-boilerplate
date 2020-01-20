const path = require('path');
const ip = require('ip').address();

module.exports = {
  port: 8070,
  contentBase: path.resolve(__dirname, '../dist'),
  historyApiFallback: true,
  host: ip,
  overlay: true,
  hot: true,
  inline: true,
  // eslint-disable-next-line no-unused-vars
  after(app, server, compiler) {
    // eslint-disable-next-line no-console
    console.log(`\n\n服务器地址 http://${ip}:${this.port}\n`);
  },
};
