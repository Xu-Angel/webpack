import './style.css';
import $ from './common/jQuery';
import Icon from './common/1.png'
import Data from './data.xml';
import printMe from './print.js';
import './index.scss';
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerText = 'hello webpack'
  element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  var image = new Image()
  image.src = Icon
  element.appendChild(image)
  return element;
}

document.body.appendChild(component());
console.log($)
console.log(Data);

// 发生变更时可以告诉 webpack 接受更新的模块。
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}