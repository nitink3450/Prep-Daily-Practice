const taskValue = document.getElementById('task');
const btn = document.getElementById('btn');
let array=[];
btn.addEventListener('click',() => {
    array.push(taskValue.value);
let  str ='';
array.forEach((ele) => {
    str+= '<li>'+ ele + '</li>'
});
    let div = document.getElementById('list')
    div.innerHTML = array;
});