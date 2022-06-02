//increament and decrement value

// let a = 2;
// console.log(a);332

// a++;
// // console.log(a);//3

// console.log(a++);//3

// prefix and postfix operators
//pre - before and post is after(++)(--)
//
//prefix(++a)..//a+1..increament the value by +1..before operation
//postfix(a++)..//a+1..increament the value by +1..after execution the statement i.e for next statement value will be

// let a = 3;
// a = a++;
// console.log(a);//3

// let a = 3;
// a = ++a;
// console.log(a);//4

// let a = 3;
// console.log(++a);//4
// console.log(a);//4

// let a = 3;
// console.log(a++);//3
// console.log(a);//4


// let a = 3;
// console.log(a++);//3
// console.log(a);//4
// console.log(++a);//5..prefix first executes the operation(add/subtract) and then executes the statement

// let a = 3;
// console.log(a--);//3
// console.log(a);//2
// console.log(++a);//3
// console.log(--a);//2

// let c = 2;
// let d = 3;
// console.log(c++ + ++d);//6 c= 2,d=3+1=4
// console.log(c,d);//3,4...c=2+1=3..d=4
// console.log(c,d);//3,4

//LOGICAL OPERATORS:

//&&(AND) , ||(OR), !(NOT)

//&&(AND):

//first variable is  non zero/true,then the second variable will be output and
// if first variable is zero/false,then the second variable will be never checked and the output will be zero/false.

// let f = 2;
// let g = 3;
// console.log(f && g);//3..if f=0 o/p will be 0..if g=0 o/p will be 0
// console.log(f > 0 &&  g < 11);//true..as (0<0)

//||(OR):

//if the first  variable is true/non zero, then the second variable will not be checked and the first variable will be the o/p
//-if the first variable is zero/false ,then the second variable will be checked and the o/p will be the second variable

// let f = 1;
// let g = 10;
// console.log(f || g);//1

//!(NOT):negation:

//it will always give u o/p boolean values i.e. true or false only
//a number which is non zero is considerd as true by default and a negation on true is suppose to give u false.
//negation is always going to give u values in true/false only.

// let f = 1;
// let g = 10;
// console.log(! (f>0));//false
// console.log(! (f<0));//true
// console.log(!f);//false

//#ternary operators:

//if there is condition then o/p will always either be true or false

//(condition)? statement1: statement2;..if condition is true o/p will be statement1 and if condition is false o/p will be statement2

// let h = 1;
// h < 1 ? console.log("statement is true") : console.log("statement is false");//statement is false
// h >= 1 ? console.log("statement is true") : console.log("statement is false");//statement is true
// h == 1 ? console.log(++h) : console.log(h++);//2
// h != 1 ? console.log(++h) : console.log(h++);//3
// console.log(h++);//3
// console.log(++h);/5

//#comma operators(,):    this operators seperates the one statement into two statement

// let x = 1;
// x =(x++, x);
// console.log(x);//2

// let x = 1;
// console.log(x++), console.log(x);//1..//2

// let x = 1;
// x =(x++, x);//...the value at the rightmost position of the statement
//              // this value will be given to the = variable i.e.x in this case
// console.log(x);//2

// let x = 1;
// x = (x++,++x, x);//..rightmost position of the x value
// console.log(x);//3
