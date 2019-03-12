import './style.css';
<<<<<<< HEAD
import { cube } from './math.js';
/* 注意，我们并未从 src/math.js 模块中 import 导入 square 方法。这个功能是所谓的“未引用代码(dead code)”，也就是说，应该删除掉未被引用的 export。现在让我们运行我们的npm 脚本 npm run build，并检查输出的 bundle： */
function component() {
  var element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');
  return element;
}

document.body.appendChild(component());
=======
import $ from './common/jQuery';
import Icon from './common/1.png'
import Data from './data.xml';
import printMe from './print.js';

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
>>>>>>> master
