//  difference between null and undefined,not defined
// When we declare a variable and value is not assigned then it will give you output undefined in the console whereas null is a assiged value.It's type of is object where as type of undefined is primative data type i.e is undefined.
// let a;
// a=null;//assigment value is 10 or we can say the value has been assigned to a is 10.
// if(a==null){
//     console.log('yes')
// }
// else{
//     console.log('No')
// }
// a=null
// console.log(b)//gives the


//ways to define funcctions in js-

// this is 1-st way to define function
// function result1(){
//     console.log('Naveen1')
//    }
// // this is 2-st way to define function
// let result2=function(){
//     console.log('Naveen2')

// }
// // this is 3-st way to define function
// const result3=()=>{
//     console.log('Naveen3')
// }
// result3();
// result2();
// result1();

// //Q.1.you have been given the marks of students,you have to
// // find whether he/she is passed or failed using ternary operator.
// //Passing marks is greater than 40.

// let marks=30;
// (marks >= 40)? console.log('passed') : console.log('failed');


// //Operator-
// //Arithmatic operator

// let a =(function(){

// })();//something like that

// const result=(marks)=>{
//     (marks>=40)?console.log('Pass'):console.log('fail');
//     // if(marks>=40){
//     //     console.log('Pass')
//     // }
//     // else{
//     //     console.log('fail')
//     // }
// }
// let prasanana=30.1;
// let Nitin=32.1;
// let Naveen=40;
// let Deepak=43;
// let Priyanka=45;

// result(prasanana);
// result(Nitin);
// result(Naveen);
// result(Deepak);
// result(Priyanka)
const First_Digit = (n) => {
  
    while(n >= 10){
      n = n / 10;
    }
    return Math.floor(n);
};
console.log(First_Digit(4567))
