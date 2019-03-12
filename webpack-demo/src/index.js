import './style.css';
function component() {
  var element = document.createElement('div');
  element.innerText = 'hello webpack'
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());