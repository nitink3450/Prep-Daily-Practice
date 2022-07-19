const lowerInput =document.getElementById('lower');
 lowerInput.addEventListener('keyup',()=> {//keyboard events= keypress,keydown
    let firstInput=document.getElementById('capital');
    firstInput.innerText = lowerInput.value.toUpperCase();
    firstInput.style.color='green';
 });

 const upperInput=document.getElementById('upper');
 upperInput.addEventListener('keyup',() =>{
    let secondInput=document.getElementById('small');
    secondInput.innerText= upperInput.value.toLowerCase();
    secondInput.style.color='blue'
 });