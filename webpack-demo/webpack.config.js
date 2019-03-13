const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')

// 对 webpack 配置进行一处修改。通常，module.exports 指向配置对象。要使用 env 变量，你必须将 module.exports 转换成一个函数：
module.exports = env => {

  // Use env.<YOUR VARIABLE> here:
  console.log('NODE_ENV: ', env.NODE_ENV) // 'local'
  console.log('Production: ', env.production) // true

  return {
    mode: 'production',
    devtool: 'inline-source-map', // 编译后的代码映射回原始源代码
    devServer: { // 配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
      contentBase: './dist',
      hot: true // 是否开启热更新
    },
    plugins: [
      new CleanWebpackPlugin(), // 清楚dist目录文件
      new HtmlWebpackPlugin({ // 管理新生产的HTML 和 配置依赖
        title: '热更新'
      }),
      new webpack.NamedModulesPlugin(), // 启用热更新 -- 更容易查看要修补(patch)的依赖
      new webpack.HotModuleReplacementPlugin(), // 启用热更新
      new ManifestPlugin() // 生成资源对应的JSON文件
    ],
    entry: {
      app: './src/index.js',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/' // 配合webpack-dev-middleware 使用资源 以确保文件资源能够在 http://localhost:3000 下正确访问，
    },
    module: {
      rules: [{
          test: /\.css$/,
          /* 除了处理CSS外，借助于 style-loader 的帮助，CSS 的模块热替换实际上是相当简单的。当更新 CSS 依赖模块时，此 loader 在后台使用 module.hot.accept 来修补(patch) <style> 标签。 */
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        /* file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录。这就是说，我们可以将它们用于任何类型的文件，包括字体 */
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
        /* 数据，如 JSON 文件，CSV、TSV 和 XML。类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行。要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。 */
        {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader'
          ]
        },
        {
          test: /\.xml$/,
          use: [
            'xml-loader'
          ]
        }
      ]
    }
  }
};