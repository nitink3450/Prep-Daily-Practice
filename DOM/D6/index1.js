const className= document.getElementsByTagName('input');

[...className].forEach(function(ele){
    ele.addEventListener('keyup',() => {
            console.log(ele.value);
    })
});

// const inputElements = document.getElementsByTagName('input');

// [...inputElements].forEach(function (ele) {
//   ele.addEventListener('keypress', function (event) {
//     //console.log(ele.value);
//     console.log(event.target.value);
//   });
// });
