 
/* 
现在，在 webpack.common.js 中，我们设置了 entry 和 output 配置，并且在其中引入这两个环境公用的全部插件。在 webpack.dev.js 中，我们为此环境添加了推荐的 devtool（强大的 source map）和简单的 devServer 配置。最后，在 webpack.prod.js 中，我们引入了之前在 tree shaking 指南中介绍过的 UglifyJSPlugin。
*/
const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js'
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Production'
     })
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader',
         'css-loader']
       },
       {
         test: /\.(png|jpg|svg|gig)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.(scv|tsv)$/,
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