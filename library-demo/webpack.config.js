var path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'xQuery.js',
    // 对于用途广泛的 library，我们希望它能够兼容不同的环境，例如 CommonJS，AMD，Node.js 或者作为一个全局变量。为了让你的 library 能够在各种用户环境(consumption)中可用，需要在 output 中添加 library 属性：
    library: 'xQuery',
    // 。为了让 library 和其他环境兼容，还需要在配置文件中添加 libraryTarget 属性。这是可以控制 library 如何以不同方式暴露的选项。
    /* 
    变量：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。
    this：通过 this 对象访问（libraryTarget:'this'）。
    window：通过 window 对象访问，在浏览器中（libraryTarget:'window'）。
    UMD：在 AMD 或 CommonJS 的 require 之后可访问（libraryTarget:'umd'）。
    如果设置了 library 但没设置 libraryTarget，则 libraryTarget 默认为 var
    */
    libraryTarget: 'window'
  },

  /* 如果执行 webpack，你会发现创建了一个非常巨大的文件。如果你查看这个文件，会看到 lodash 也被打包到代码中。在这种场景中，我们更倾向于把 lodash 当作 peerDependency。也就是说，用户应该已经将 lodash 安装好。因此，你可以放弃对外部 library 的控制，而是将控制权让给使用 library 的用户。
   */
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
}