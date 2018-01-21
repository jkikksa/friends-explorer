const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    contentBase: 'dist'
  }
});
