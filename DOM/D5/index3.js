//document.getElementById -->selects only single element  // it is used for manipulating one element at at time

//document.getElementsByClassName
// its related to interacting with multiple html elements

const elements = document.getElementsByClassName('country');

console.log(elements);

//elements[0].style.color = 'green'; // it wont work
//elements[1].style.color = 'orange'; // it wont work
//elements[2].style.color = 'grey'; // it wont work
/*
elements[0].addEventListener('click', function () {
  elements[0].style.color = 'red';
});

elements[0].addEventListener('mouseenter', function () {
  elements[0].style.color = 'orange';
});

elements[0].addEventListener('mouseleave', function () {
  elements[0].style.color = 'grey';
});
*/

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', function () {
    elements[i].style.color = 'red';
  });
}