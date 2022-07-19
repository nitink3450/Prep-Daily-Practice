const colorName= document.getElementById('color');
colorName.addEventListener('change',() => {//change event fired after clicking ouside 
    let myName= document.getElementById('head');
    myName.style.color = colorName.value;
});

const bgColor=document.getElementById('bgcolor');
bgColor.addEventListener('keyup',() => {
  let myNameBg=document.getElementById('head');
  myNameBg.style.backgroundColor = bgColor.value;
})