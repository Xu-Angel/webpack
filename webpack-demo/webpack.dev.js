const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// 合并共用的配置
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});