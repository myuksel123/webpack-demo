// import your function
import myName from './myName';
import './style.css';
import Icon from './icon.jpg';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Cody');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());