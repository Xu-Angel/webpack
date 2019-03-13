import './style.css';
import $ from './common/jQuery';
import Icon from './common/1.png'
import Data from './data.xml';
import printMe from './print.js';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

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