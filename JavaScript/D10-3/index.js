// //Q.1.CONVERT ALL ELEMENTS OF STRING ARRAY INTO UPPERCASE USING FOREACH LOOP
// // Q.2.//calculate the sum of elements of an array using forEach loop 
// // [1,2,3,4,5] -->O/P:15 You have to 

// ///--->ForEach -->
// // this is a function definition 
// function foo(i){  // i and j are known as parameters
  
// }

// //foo(1,2);
// //foo([2,3,4],2);


// // this is a function call
// foo(function bar(){

//   /// bar is a callback function 
  
// })

// //A callback function is a function passed as an argument to another function 

// //foreach is only applicable to arrays 

// const arr=[1,2,3,4,5];
// arr.forEach(function cb(ele){

//   console.log(ele);
  
// });


// for(let i=0;i<arr.length;i++){
//   console.log(arr[i]);
  
// }


// //You have to convert all the elements of string array into uppercase using forEach loop

// //  

// ///  

// //const str="hello";
// //console.log(str.toUpperCase());

// // const arr=["a","b","c"];
// // const arr2=["A","B","C"];

// // Only forEach loop

// function converStr(arr){

//   // foREach loop

//   ///
// }

// // const arr=[1,2,3,4,5];

// // function findSum(arr){
// //   let sum=0;
// // arr.forEach((ele)=>{
// //   sum +=ele;
// // });
// // return sum;
// // }
// // console.log(findSum(arr));\

//Q.1.
// function convertString(arr){

//     //const arr2=[];
//     let str=""
  
//     arr.forEach(function cb(ele){
//       //arr2.push(ele.toUpperCase());
//       str+=ele.toUpperCase()
      
//     })
//    return  str;
//     //return arr2;
//   }
  
//   console.log(convertString(["a","b"]))


//   function converstr(arr){

//     const arr1=[];
    
//     arr.forEach(function cb(ele){
  
//       arr1.push(ele.toUpperCase());
      
//     })
//     return arr1;
//   }
//      console.log(converstr(['a','b']));


// function ConvertToUpperCase(arr){
//     var tem1='';
//     arr.forEach((i)=>{
//       tem1 +=i.toUpperCase();
//     });
//     console.log(tem1)
//   }
//   const arr1=['a','b','c'];
//   ConvertToUpperCase(arr1);

//Q.2
// function findSum(arr){
//     let sum=0;
  
//      arr.forEach(function cb(ele){
//       sum=sum+ele;
//       //str+=ele.toUpperCase()
      
//     })
//     return sum;
//   }
  
//   console.log(findSum([1,2,3,4]))
  


//map--->

// map function is an array function ,which also returns an array ---->

//if you have an array argument --
// you want an array as well 
// then use map function -->
const arr=["a","b","c"];

const mapReturn=arr.map(function cb(ele){

  // you want to do some operations on individual array elements  
  // convert them into uppercase
  // convert them into lowercase
  // you want to check where they are even or not
  const temp=ele.toUpperCase();

  return temp;
  
  
 
  
})

console.log(mapReturn)


//map--->

// 1-if you want to do some operation on individual elements
// 2- you want array as an output
// 3- you want same number of elements as present in your original array
// then use map
const arr=["a","b","c"];
// ["A","B","C"];

const arrMap=arr.map(function cb(ele){

 // const temp=

  return ele.toUpperCase();
  
})


console.log(arrMap);


























