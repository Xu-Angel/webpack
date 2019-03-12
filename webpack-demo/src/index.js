function component() {
  var element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  // 控制this 当模块运行在 CommonJS 环境下这将会变成一个问题，也就是说此时的 this 指向的是 module.exports。在这个例子中，你可以通过使用 imports-loader 覆写 this：
  // Assume we are in the context of `window`
  this.alert('Hmmm, this probably isn\'t a great idea...')
  return element;
}

document.body.appendChild(component());