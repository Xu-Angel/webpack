import './style.css';
import $ from './common/jQuery';
import Icon from './common/1.png'
import Data from './data.xml';

function component() {
  var element = document.createElement('div');
  element.innerText = 'hello webpack'
  element.classList.add('hello');
  var image = new Image()
  image.src = Icon
  element.appendChild(image)
  return element;
}

document.body.appendChild(component());
console.log($)
console.log(Data);