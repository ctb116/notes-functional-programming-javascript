// ************************************************
// ignore everything in this file
// it is just a pile of noodles to make the browser go
// ************************************************
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Get the container elements
const contentContainer = document.getElementById('content');
var btnContainer = document.getElementById('navigation');

// create number of buttons based on the number of div child elements
for (var i = 1; i <= contentContainer.childElementCount; i++) {
  contentContainer.querySelector(`:nth-child(${i})`).setAttribute('id', i);
  contentContainer.querySelector(`:nth-child(${i})`).classList.add('cnts');

  const button = btnContainer.appendChild(document.createElement('button'));
  button.classList.add('btn');
  button.innerHTML = i;
}

// assign the first div to display
contentContainer.querySelector(':nth-child(1)').className += ' show';
// assign the first button as active
var btns = btnContainer.getElementsByClassName('btn');
btns[0].className += ' active';

// Loop through the buttons and add the active class to the current/clicked button
// Uses the innerHTML of the button clicked to display the corresponding div
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';

    var currentContent = document.getElementsByClassName('show');
    currentContent[0].className = currentContent[0].className.replace(
      ' show',
      ''
    );

    contentContainer.querySelector(`:nth-child(${this.innerHTML})`).className +=
      ' show';
  });
}

var toggleButton = document.getElementById('displayPage');

toggleButton.addEventListener('click', function () {
  var cnts = document.getElementsByClassName('cnts');

  for (var i = 0; i < cnts.length; i++) {
    let test = cnts[i].className.includes('showall');
    if (test) {
      cnts[i].className = cnts[i].className.replace(' showall', '');
    } else {
      cnts[i].className += ' showall';
    }
  }

  var x = document.getElementById('navigation');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
});
