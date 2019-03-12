function component() {
  var element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  // 控制this 当模块运行在 CommonJS 环境下这将会变成一个问题，也就是说此时的 this 指向的是 module.exports。在这个例子中，你可以通过使用 imports-loader 覆写 this：
  // Assume we are in the context of `window`
  this.alert('Hmmm, this probably isn\'t a great idea...')
  return element;
}

document.body.appendChild(component());

// 当我们开始执行构建时，polyfills.bundle.js 文件将会被载入到浏览器中，然后所有代码将正确无误的在浏览器中执行。请注意，以上的这些设定可能还会有所改进，我们只是对于如何解决「将 polyfills 提供给那些需要引入它的用户」这个问题，向你提供一个很棒的想法。
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
    console.log(json)
  })
  .catch(error => console.error('Something went wrong when fetching this data: ', error))