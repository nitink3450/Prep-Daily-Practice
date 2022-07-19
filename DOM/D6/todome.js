
const button=document.getElementById('btn');
button.addEventListener('click',() =>{
    const input=document.getElementById('input').value;
    const li =document.createElement('li');
    li.innerText =input;
    div.append(li);   
    li.addEventListener('click',() =>{
        li.style.textDecoration ='line-through';
    })
    li.addEventListener('dblclick',() =>{
        div.removeChild(li);
    }) 

})
