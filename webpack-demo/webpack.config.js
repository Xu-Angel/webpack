const path = require('path');
<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack')
=======
/* 
通过 package.json 的 "sideEffects" 属性来实现的
"sideEffects": false
，如果所有代码都不包含副作用，我们就可以简单地将该属性标记为 false，来告知 webpack，它可以安全地删除未用到的 export 导出。
「副作用」的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。举例说明，例如 polyfill，它影响全局作用域，并且通常不提供 export。
如果你的代码确实有一些副作用，那么可以改为提供一个数组：
>>>>>>> TreeShaking

module.exports = {
<<<<<<< HEAD
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
=======
  // 我们已经可以通过 import 和 export 语法，找出那些需要删除的“未使用代码(dead code)”，然而，我们不只是要找出，还需要在 bundle 中删除它们。为此，我们将使用 -p(production) 这个 webpack 编译标记，来启用 uglifyjs 压缩插件。
  mode: 'production',// 从 webpack 4 开始，也可以通过 "mode" 配置选项轻松切换到压缩输出，只需设置为 "production"。
  entry: './src/index.js',
>>>>>>> TreeShaking
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
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
};