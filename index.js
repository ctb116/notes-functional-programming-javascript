// ignore everything below this line
// ************************************************
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const contentContainer = document.getElementById('content');

console.log(contentContainer.childElementCount);

// Get the container element
var btnContainer = document.getElementById('navigation');

// create buttons based on the number of div child elements
for (var i = 0; i < contentContainer.childElementCount; i++) {
  const button = btnContainer.appendChild(document.createElement('button'));
  button.classList.add('btn');
  button.innerHTML = i + 1;
}

// assign the first button as active
var btns = btnContainer.getElementsByClassName('btn');
btns[0].className += ' active';

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
