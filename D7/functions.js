// console.log("working");

//normal function with function keyword passsed while calling .it only requires parameters if we r passing the arguments

// function myName(name){//catches are knows as parameters
//     console.log("hello!!" ,name);
    
// }
// myName("Nitin");//arguments

// function myName(nameOne,nameTwo){//catches are knows as parameters
//     console.log("hello!!",nameOne,nameTwo);
    
// }
// myName("Nitin","Vishal");//arguments

//ARROW FUNCTIONS: =>
//-they have different syntax to that of a normal function.its most/widely used
//and hence we too will be using it quite often

//to avoid the same name of the FUNCTION WE USE .....CONST.... KEYWORD.......
//syntax:
// const add = (a,b) =>{//()..this used for parameters
//     let result = a + b ;
//     console.log("result =",result) ;   
// }
// add(3,4);
// const substract = (c,d) =>{
//   let res = c - d ;
//   console.log(`result ${res}`);
//   }
//   substract(10,5);

//FUNCTION EXPRESSIONS:

//

// const multiply = function(a,b){
//     console.log("the multiple of a and b is ",a*b);   
// }
// multiply(4,5);//o/p: the multiple of a and b is  20

// console.log(multiply);//o/p: function defination declaraton will be printed
// ƒ (a,b){
//     console.log("the multiple of a and b is ",a*b);   
// }
//Percentage formullae:
// percentage %= (Total marks got / out of Total mark) * 100

//For 2 subjects...
// const marks = (a,b) =>{
//     let result = (a + b) / 2 ;
//     console.log("percent = ",result,"%");
// }
// marks(100,100);

//For 5 subjects....
// const markss = (c,d,e,f,g) =>{
//     let result =((c + d + e + f + g) / 500) * 100 ;
//     console.log("percent = ",result,"%");
// }
// markss(100,80,100,90,70);

//e.g.:
// const percentage = (marksObtainedOne, marksObtainedTwo) => {
//     let totalMarks = 200;
//     let totalMarksObtained = marksObtainedOne + marksObtainedTwo;
//     let percent = (totalMarksObtained/totalMarks) * 100;
//     console.log("The percentage secured is",percent);
// }
// percentage(95,98);

//Block Scoping AND Shadowing://by using this we can use many same variables name as we wants without any addition functtion only using let and const ..they act as same

//let variables are block scoped.
//let variable with same name in global scope(openly) r not allowed but in different bracket(nested bracket) they r allowed.
//in normal case we cant take variables name with same name (a) for let keyword.
// but in this 2nd same variable name is in the inside the curley bracket.so it will print 1st on line  in the browser
//it is called block shadowing.but it is not possible in the gloabal scope...vvIMP
//in block scope let and const behaves same
//since const need to declare and initialization in once but it works with shadow scope
//var variables are not block scope ..they will just ovewrite the value
//value assigned with var variables are not like that of let and const
//the last assigned values r the one's assigned to the var variables

//e.g.1....using let keyword but last o/p
// let a = 10;
// {
//     let a = 20 ;
//     console.log(a);//20
// }
// {
//     let a = 30 ;
//     console.log(a);//30  
// }
// console.log(a);//10
//o/p:20 30 10 

//e.g.2....using let keyword ..1st o/p
// let a = 10;
// console.log(a);//10
// {
//     let a = 20 ;
//     console.log(a);//20
// }
// {
//     let a = 30 ;
//     console.log(a);//30  
// }
//o/p:10 20 30

//e.g.3.....using const keyword
// const a = 10;
// {
//     const a = 20 ;
//     console.log(a);//20
// }
// {
//     const a = 30 ;
//     console.log(a);//30  
// }
// console.log(a);//10...same o/p as let variable..they act as same let and const in the block scope/shadowing
//o/p:20 30 10 

//e.g.4....using var keyword
// var a = 10;
// {
//     var a = 20 ;
//     console.log(a);//20
// }
// {
//     var a = 30 ;
//     console.log(a);//30  
// }
// console.log(a);//30..overwrite the value last a bcoz console log iswritten in global scope.
// //o/p:20 30 30...

//e.g.4....using var keyword
// var a = 10;
// console.log(a)
// {
//     var a = 20 ;
//     console.log(a);//20
// }
// {
//     var a = 30 ;
//     console.log(a);//30  
// }
// console.log(a);//30..var overwrite the value last a bcoz console log is written in global scope.
// //o/p:10 20 30 30...

//Scope and Lexical Environment:

//each of the variable has its own scope
//variables has assigned to there parent so there childrens has acces to there parent values but parent has not access or right to childrens values parent only access the global values

//one global declarartion like let a=10;
// let a = 10;//global function..bcoz its declared and initialed outside the function
// function one(){
//     let b =20 ;
//         console.log(a + b );//30..if we write here as a + b + c it will not work..it will print not defined c value
//     two();

//     function two(){
//         let c = 30;
//         console.log(a + b + c);//60
//         four();

//         function four(){
//             let d = 40;
//             console.log(a + b + c + d);//100
//             three();

//         }
//     }
// }
// one();//nothing will be printed up there if we havent called the main function name i.e. one()

//two global declarartion
// let a = 10;//global declarartion 1st 
// function one(){//
//     let b =20 ;
//         console.log(a + b );//30..if a + b + c it will not worked ..it will print not defined c value
//     two();

//     function two(){
//         let c = 30;
//         console.log(a + b + c);//60
//         four();

//         function four(){
//             let d = 40;
//             console.log(a + b + c + d);//100
//             three();

//         }
//     }
// }
// function three(){//global declarartion s2nd
//     let d = 40;
//     console.log(a + b + d);//b is undefined error...as b is defined in children sectionnot as a global scope so we cant use it for global.so it will show as b is undefined 
// }
// one();
// // // o/p:Uncaught ReferenceError: b is not defined
// //     at three (index.js:182:21)
// //     at four (index.js:175:13)
// //     at two (index.js:170:9)
// //     at one (index.js:165:5)
// //     at index.js:184:1


//lexical environment is the behaviour of looking a variable to its parents scope , 
// if not found there then to its parent's parent also...Upto global scope...

// let a = 10;
// function one(){
//     let b = 20;
//     console.log(a+b);//30
//     two();

//     function two(){
//         let c = 30;
//         console.log(a+b+c);//60

//         three();
//         // function three(){
//         //     let d = 40;
//         //     console.log(a+d);//100
//         // }

//     }
// }
// function three(){
//     let d = 40;
//     console.log(a+d);//50....her both a and d r defined globaly so we can use it
// }
// one();

//##############################--rough work--##############################
// const Print_Odd = (N) => 
// {
// 	 console.log('2')
// 	 let num=3;
// 	 while(num<=N){
// 	   console.log(num)
// 	   num+=2
// 	 }
// };

// Print_Odd(20);

// const Prime_Check = (n) => {
//     for (var i = 2; i < n; i++) {
//       if (n % i !== 0) {
//         return "YES";
//       } else {
//         return "NO";
//       }
//     }
//   };
//   console.log(Prime_Check(11));



// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// const Print_pattern = (N) => 
// {
//   let i,j;
 
//   for(i=0;i<N;i++){
//      let result=''
//     for(j=0;j<=i;j++){
//       result=result+'*'
//     }
//     console.log(result)
  
//   }

// };

// Print_pattern(5);


// const Find_Digits = (N) => 
// {
//   let count = 0;
// 	 for(var i=0 ; N !== 0; i++){
// 	      var res = res / 10;
//         count++;
//         break;
// 	      	 }
	 
// 	 return count;
// };
// Find_Digits(1234);
























































































