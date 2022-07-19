// let arr1=[1,2,3,4];
// function twice(){
//   console.log(arr1[3] * 2);
// }
// twice();


// const arr=[1,2,3,4];
// function PushArr(arr){
// const arr1=[];
//     for(let i=0;i<arr.length;i++){
//         // let tem=2*arr[i];
//         arr1.push(2*arr[i]);
//     }
//     console.log(arr1);
// }
// console.log(PushArr(arr=[1,2,3,4]));
// //Add all elements of an array
// // const arr=['a','b','Hello','there'];
// // function Addstr(arr){
// //     let tem='';
// //     for(let i=0;i<arr.length;i++){
// //         tem=tem+arr[i];
// //     }
// //   return tem;
// // }
// // console.log(Addstr(arr))

// //hoisting is the default behaviour of javascript 

// // because hoisting actually revolves around the decalartion 

// // the decalartion of any variable /function /class 
// // actually is moved to the top of the scope --->


// ///  ---->

// //console.log(c);  // js has the concept of hoisting
// //var c=9;  // actual creation 



//   //console.log(k);
// /*
// function foo(){

//   console.log(k);


// var k=99;
  
// }
// */

// //console.log(l);  /// is printing

// // block
// /*
//   //console.log(l); // here ???
// function bar(){

//   console.log(l);  /// here

// if(true){

//   console.log(l);

//   var l=99;
  
// }


  
// }
// //console.log(b);
// //let b=8;
// bar();
// */


// //const array=[1,2,3,true,"string"];
// /*
// for(let i=0;i<array.length;i++){
//  // console.log(array[i]);
// }
// */

// ///console.log(array[6])

// // push method is used to insert something in the last in an array
// // pop is used to get the last item from an array
// // it also deletes the item from the array 
// //array.push(10);
// //console.log(array.pop());
// //console.log(array);

// // unshift and shift deals with first index of an array 

// // unshift is used to insert in the beginning of an array  ie the 0th index
// //array.unshift(9);
// /*
// console.log(array);

// // shift is used to get the first item from an array
// // and it deletes the item as well from the array

// console.log(array.shift());
// console.log(array);


// // Question -
// // write a function that takes  an integer array  and returns another array that actually is twice the elements of original array
// // const arr=[9,12,4,5,6];  //  const arr2=[18,24,8,10,12]
// /**
// function foo(arra){
//   return thearratwhich
// }
// */

// // Write a simple js function that joins all elements of an array 
// // ["a","b","hello","there"] -->abhellothere

// function twiceArray(array){
//     const newArray=[];
  
//     for(let i=0;i<array.length;i++){
  
//       newArray.push(array[i]*2)
      
//     }
//     return newArray;
    
//   }
  
  // function joinElements(array){
  //   let str="";
  //     for(let i=0;i<array.length;i++){
  //       //str=str+array[i];
  //      str+=array[i];
  //   }
  //   return str;
  // }
  // //console.log(twiceArray([2,3,4,5]));
  // //console.log(twiceArray([20,30,40,50]));
  // console.log(joinElements(["hello","there","people"]))


// const Find_Prod = (array,N) => 
// {
//     let array1=[];
//  for(let i=0; i<array.length ; i++){
   
//        array1.push(array[i]* 2);
//    }
//      return array1;
// };
// console.log(Find_Prod([1,2,3,4,5],5));








