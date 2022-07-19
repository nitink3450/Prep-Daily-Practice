///console.log('Hello!');

// this document actually offers us lot of methods
// which we can use to manipulate the dom
//1-document.getElementById();
//2-document.getElementsByClassName();
//3-document.getElementsByTagName();
//4- document.querySelectorAll();
//5-document.querySelector();

//document.getElementById
//1-Identify the element from dom object with id
// 2- select the element from dom object using document.getElementById

//const elem = document.getElementById('heading'); // it actually selects the element from big dom object
//style property
/*
elem.style.color = 'green';
elem.style.background = '#FF5733';
elem.style.width = '300px';
elem.style.fontFamily = 'Times New Roman';
elem.style.fontSize = '30px';

// text property
elem.innerText = 'Hello World I am John cena';

//html property

elem.innerHTML = '<span>Something From span</span>';
*/

const btn = document.getElementById('btn');
const heading = document.getElementById('heading');

btn.addEventListener('click', function () {
  // console.log('hello there');
  heading.style.color = 'blue';
});

heading.addEventListener('mouseenter', function () {
  heading.style.color = 'pink';
});

heading.addEventListener('mouseleave', function () {
  heading.style.color = 'black';
});
