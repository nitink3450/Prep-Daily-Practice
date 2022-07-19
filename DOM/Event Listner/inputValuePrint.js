const button =document.getElementById('btn');

button.addEventListener('click',() =>{//events =click,mouseenter,mouseleave

    let name = document.getElementById('name');
    console.log(name.value);

    let email = document.getElementById('email');
    console.log(email.value);

    let phone = document.getElementById('phone');
    console.log(phone.value);

    let password = document.getElementById('pass');
    console.log(password.value);

// console.log(email.value, name.value, phone.value, password.value);
});