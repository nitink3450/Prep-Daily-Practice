// console.log(myStreet);//undefined
// let myStreet;//let will occur error
// myStreet = "nitin";
// console.log(myStreet);//nitin

//#Naming conventions for the variables:
//1.Try to keep it as descriptive as possible.
//2.we have to keep our variables name in camelCase.
//e.g. camelCase= myName
//     pascalcase= MyName
//     kababcase= my-name
//3.Try to avoid numbers(in interger format instead use it in string format) and characters in your variable name 


//#Keywords:[let, var, const]
//e.g. let numberOne = 34 ;(keyword variable_name = value;)
//A.LET:
//      1.This keyword is used to declare the variable in line which can or cannot be assigned value instantly
// 2.this cant have variables with same name.
// 3.this keyword is generally used when a variables value is supposed to be change in the future
// 4.they r hoisted.
// e.g.let name1 = "Sahil";
// let name2 = "rajat";

function operation(a,b,c){
    let res1 = a + b;
    let res2 = res1 + c;
    return res2;             // [this res2 value will change in the future (after addition) ..look 3rd point.]
}

let finalResult = operation(3,4,5);
console.log(finalResult);
// 
// 
// B.CONST:
//         1.This keyword has to be declared and initiallized with the value in one line only.
// 2.they are not hoisted.
// 3.this cant have variables with value of the same name
// 4.this keyword variables value can never changes in future.if it changes it will shows an error
//e.g. const newNumber= 21;  true..[it will remain same value it will never changes] 
//     cont newNmber= a+b ; false..it will give an error bcoz addition will change result.
// 
// 
// C.VAR:
//        1.This keyword is used to declare the variable in line which can or cannot be assigned value instantly or in the same line
// 2.this can have variables with same name.but it will overwrite/replace the previous/old value with new one.
// 3.they are hoisted.
// 4.Never use var in code.
// e.g. 1.var myHobby;
//          myHobby="skating";.........old
//        
//     2. var myHobby="Cricket";.........new...with same variable name
// ............................................................................................
// Declaration: let myName;
// Initialization: myName="nitin";
// Declaration + Initialization =let myName="nitin";
// ...........................................................................................
// 
// #HOISTING: 
// 
// 1.Hoisting allow us to use the variable name even before declaring them.
// 2.It is only supported by VAR keyword and FUNCTIONS.( functions and var keyword r hoisted)
// 3.hoisting is only supported for declaration but not for initiallization.
// 4.it brings the code declaration on the top of the code.
//
//e.g. 1. addition(3,4);....here 
//   function addition(a,b){
//     let res = a + b;
//     console.log(res);
// }
//2. console.log(myStreet);..............undefined & did not declared and initiallized
// var myStreet;...................................let and const will occur error point 2nd imp
// myStreet = "nitin";
// 
// 5.for keywords let and const ,the declaration and initiallization needs to be done beffore 
//   using that variable..they do not support to the hoisting.
// 6.In JS each and every variable declared using either var, let or const gets some memory space. 
// 7.If variable is declared using var then it will get memory space in global scope. So if you will 
//try to access the variable in this case before initialising it then it will return “undefined”.
// 8.If variable is declared using either let or const then it will get memory space in separate
// scope not in global scope. So if you will try to access the variable in this case before
// initialising it then it will return Reference error saying you cannot access the variable before initialization.

// 
// 
// 
