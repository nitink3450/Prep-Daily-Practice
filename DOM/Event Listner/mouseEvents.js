// document.getElementById
// document.getElementsByClassName
// document.getelmentsByTagName
// document.querySelector();
//document.querySelectorAll();

// Step1 - acces the element from document

const element = document.getElementById('heading');

// style property -
// text/html or value property

//

const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  element.style.color = 'brown';
});

element.addEventListener('mouseenter', function () {
  element.style.color = 'brown';
});

element.addEventListener('mouseleave', function () {
  element.style.color = 'green';
});

// Input fields events
// change
// keypress --->keyboard
// keydown
// keyup event

const nameInput = document.getElementById('email');

nameInput.addEventListener('change', function () {
  console.log('change event fired', nameInput.value);
});

nameInput.addEventListener('keypress', function () {
  console.log('key press event fired', nameInput.value);
});

nameInput.addEventListener('keydown', function () {
  console.log('key down event fired', nameInput.value);
});

nameInput.addEventListener('keyup', function () {
  console.log('key up event fired', nameInput.value);
});
