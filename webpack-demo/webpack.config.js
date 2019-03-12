const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(), // 清楚dist目录文件
    new HtmlWebpackPlugin({ // 管理新生产的HTML 和 配置依赖
      title: 'Caching'
    }),
    new ManifestPlugin(), // 生成资源对应的JSON文件
  ],
  // FIXME：webpack4 移除了 CommonsChunkPlugin，现在的写法：
  optimization: {
    splitChunks: {
      name: 'common' // 指定公共的bundle的名称
    }
  },
  entry: {
    index: './src/index.js',
  },
  // chunkhash ，bundle 的名称是它内容（通过 hash）的映射。如果我们不做修改，然后再次运行构建，我们以为文件名会保持不变。然而，如果我们真的运行，可能会发现情况并非如此：（译注：这里的意思是，如果不做修改，文件名可能会变，也可能不会。） 输出可能会因当前的 webpack 版本而稍有差异。新版本不一定有和旧版本相同的 hash 问题，但我们以下推荐的步骤，仍然是可靠的。
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].[chunkhash].js', // 
  },
  module: {
    rules: [{
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