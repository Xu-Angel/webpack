import './style.css';
import $ from './common/jQuery'
function component() {
  var element = document.createElement('div');
  element.innerText = 'hello webpack'
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
console.log($)