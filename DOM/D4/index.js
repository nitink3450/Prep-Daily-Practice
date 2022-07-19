const btn = document.getElementById('btn');

btn.addEventListener('click', function () {
  // can i display the input values

  const email = document.getElementById('email');
  const name = document.getElementById('name');
  const phone = document.getElementById('phone');

  const password = document.getElementById('password');

  console.log(email.value, name.value, phone.value, password.value);
});

// let button1=document.getElementsByTagName('button')[0];
// button1.addEventListener('click',()=>{
// let b=document.getElementById('email');
// console.log(b.value);
// let c=document.getElementById('phonenumber')
// console.log(c.value);

// var a=document.getElementById('name');
//     console.log(a.value)
// })

// let button1=document.getElementsByTagName('button')[0];
// button1.addEventListener('click',()=>{
// // let b=document.getElementById('email');
// // console.log(b.value);
// // let c=document.getElementById('phonenumber')
// // console.log(c.value);

// var a=document.getElementById('name');
// var b=document.getElementsByClassName('dis')[0];
// b.innerHTML=a.value.toUpperCase()
//     console.log(a.value.toUpperCase())
// })

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
/*
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
*/

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



const myname = document.getElementById('myname');

myname.addEventListener('keypress', function () {
  const heading = document.getElementById('heading');
  heading.innerText = myname.value.toUpperCase();

  //
});




var a=document.getElementById('text');
a.addEventListener('mouseleave',()=>{
    const b=document.getElementById('heading');
    b.innerText=a.value;
    b.style.color='green';
})





<input type="text" id="input"/>

<button id="btn">
Add Todo

</button>


<div id="div">

</div>


const element=document.getElementById("input");
const btn=document.getElementById("btn");
var array=[];

btn.addEventListener("click",function(){
console.log("hii");

array.push(element.value);
let str="";

array.forEach(function(ele){

str+="<li>"+ele+"</li>"


})
const div=document.getElementById("div")
div.innerHTML=str;

})

