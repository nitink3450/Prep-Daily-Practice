//Q.1. You are given an integer A, denoting the age of a person, and your task is to
//  determine whether he/she is eligible to vote or not.

//BY USING FUNCTION-
function eligibleOrNot(A){
    (A >=18 )? console.log('eligible to vote') : console.log('not eligible to vote')
}
eligibleOrNot(20);//eligible to vote
eligibleOrNot(16);//not eligible to vote

//BY USING CONDITIONAL OPERATOR-
let A1=20;
if(A1 >=18){
    console.log('eligible to vote');//eligible to vote
}
else{
    console.log('not eligible to vote');
}

//BY USING TERNARY OPERATOR-
let A3=16;
(A3 >=18 )? console.log('eligible to vote') : console.log('not eligible to vote');//not eligible to vote

//Q.2.write a program to find whether a given number is even or odd.

//BY USING FUNCTION-
function oddEven(a){
    if(a % 2 === 0){
        console.log('EVEN')
    }
    else{
        console.log('ODD');
    }
}
oddEven(3);//ODD
oddEven(6);//EVEN

//BY USING CONDITIONAL OPERATOR-
let a1=4;
if(a1 % 2 === 0){
    console.log('EVEN');//EVEN
}
else{
    console.log('ODD');
}

//BY USING TERNARY OPERATOR-
let a2=11;
(a2 % 2 === 0)? console.log('EVEN'):console.log('ODD');//ODD

//Q.3.Write a program to find whether is prime or not?

//BY USING FUNCTION-
let checkPrime = (n) =>{
  if(n == 1){console.log('Not Prime number');}
  else if(n == 2){console.log('Prime number');}
  else{
    for(var i=2; i<n; i++){
      if(n % i == 0 ){
        console.log('Not prime')
        return;
       }
    }
   console.log('Prime');
  }
}
checkPrime(9);


// let CheckPrime = (number) => {
//   if (number <= 1) {
//     return false;
//     // console.log('Not prime')
//   }
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let result=CheckPrime(9);
// console.log(result)




// function test_prime(n)
// {

//   if (n===1)
//   {
//     return false;
//   }
//   else if(n === 2)
//   {
//     return true;
//   }else
//   {
//     for(var x = 2; x < n; x++)
//     {
//       if(n % x === 0)
//       {
//         return false;
//       }
//     }
//     return true;  
//   }
// }

// console.log(test_prime(37));



// post- print  value of i 1st then it will change for next operation(++/--)
// pre-  1st it will change then it will print value(++/--)
console.log('...........................................................................')
// let i=5;
// console.log(i);//5
// console.log(--i);//4
// console.log(--i);//3
// console.log(++i);//4
// console.log(i--);//4.......next 4-1=3
// // i=3
// console.log(i++);//3.....next 3+1=4
// console.log(i);//4
// console.log(i--);//4
// // i=3
// console.log(i++);//3
// console.log(i);//4



// console.log(++i,i--);
// console.log(i,--i);
// console.log(i++,i);

const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById('nm').innerHTML = date.toLocaleTimeString();
}
let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click',()=>{
    clearInterval(myInterval);
})


let arr = ["a", "b", "c"];
arr.newkey ='e';
arr.push('d');
console.log(arr)

// key are the property keys
for (let key in arr) {
  console.log(key);
}
console.log('....................');
// value are the property values
for (let value of arr) {
  console.log(value);
}

