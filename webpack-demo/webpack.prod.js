const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

// 合并共用的配置
module.exports = merge(common, {
  // 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
  //devtool: 'source-map,
  plugins: [
    new UglifyJSPlugin({
      // sourceMap: true // 是否开启源码映射
    }), // 压缩
    // 技术上讲，NODE_ENV 是一个由 Node.js 暴露给执行脚本的系统环境变量。通常用于决定在开发环境与生产环境(dev-vs-prod)下，服务器工具、构建脚本和客户端 library 的行为。然而，与预期不同的是，无法在构建脚本 webpack.config.js 中，将 process.env.NODE_ENV 设置为 "production"，请查看 #2537。因此，例如 process.env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js' 这样的条件语句，在 webpack 配置文件中，无法按照预期运行。
    // 如果你正在使用像 react 这样的 library，那么在添加此 DefinePlugin 插件后，你应该看到 bundle 大小显著下降。
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});