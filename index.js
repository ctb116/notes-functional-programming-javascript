// ignore everything below this line
// ************************************************
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const contentContainer = document.getElementById('content');

console.log(contentContainer.childElementCount);

// Get the container element
var btnContainer = document.getElementById('navigation');

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName('btn');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
