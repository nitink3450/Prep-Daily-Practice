//DAY-3-DSA

// Operators and Expressions-

//Q.1.Add two Numbers?
let result =0;
let sum = (a,b) =>{
    result = a+b;
    console.log(result)
}
sum(2,3)

//Q.2.Find if the conditions are obeyed or not?
let condition = (c,d)=> {
    (c > 10 && c > d)? console.log('true'):console.log('true');
}
condition(10,6)

//Q.3.Check the conditons?
let tenMultiple = (e,f) =>{
    ( e%10===0 || f%10===0)?console.log('true'):console.log('false')
}
tenMultiple(8,15)

//Q.4.Find the first digit of a 4 digit number?
const First_D= (num) => {
    console.log(parseInt(num / 1000));
  };
First_D(4567)

function firstDigit(number,n){
    while(n>1){
        number=number/10;
        n--;
    }
    return parseInt(number);
}
let result11=firstDigit(9234545681550,13);
console.log(result11)


//Q.5.Find the remainder?
let remainder = (g,h) =>{
    let res = g%h;
    console.log(res);
}
remainder(10,6);

//Q.6.Find the last digit of a 4 digit number?
let last_D = (num) => {
    let res = num%10;
    console.log(res);
}
last_D(3973);

//Q.7.Marks Calculator?
let marks =(i,j,k) =>{
    let total=(i+j+k)/300;
    let percentage =(total) * 100
    console.log(`${percentage}%`);
}
marks(89,66,97)

//Q.8.Multipy two Numbers?
let multi = (l,m) =>{
    let res = l*m;
    console.log(res);
}
multi(2,3)
