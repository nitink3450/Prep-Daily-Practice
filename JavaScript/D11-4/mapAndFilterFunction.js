// //map function --->
// //1- if you want to apply an operation to every element of an array 
// // 2- you want output to be an array 
// // 3- you want the output array to have same length as input array 
// // 4- you want to do some operation on an array 


// // input array 

// const data=[
//     {
//       "_id": "62a372cbe5bb83afa31760a8",
//       "name": "Nikki Mosley",
//       "address": "782 Prince Street, Gallina, Utah, 4156"
//     },
//     {
//       "_id": "62a372cb48e56aa3d6016871",
//       "name": "Sampson Mercado",
//       "address": "148 Crystal Street, Macdona, South Dakota, 8488"
//     },
//     {
//       "_id": "62a372cb4aad1e8bc0525d17",
//       "name": "Johnston Myers",
//       "address": "846 Eldert Lane, Cashtown, North Dakota, 5586"
//     }
    
    
//   ]
  
//   // output ["Nikki Mosley","Sampson Mercado","Johnston Myers"]
//   //code=
//   const temp= data.map(function foo(i){
//     return i.name
  
//   })
//   console.log(temp)

// // FILTER=

//   const inputArr = ['AB','BC','AC','AD'];
// const outputArr=inputArr.filter(function cb(ele){
//   return ele.startsWith('A');
// });
// console.log(outputArr);


/// filter --->function --->

// 1- your input is an array 
// 2- you want the output to be an array 
// 3- you want the output array's length to be less than or equal to input arrays length
// 4 - you want to select soeme elements from inoput array


// const inputArr=[1,2,3,4,5,6,7,8,11,56,78];


// const outputArr=inputArr.filter(function cb(ele){
//   //console.log(ele);
//  if(ele>=11){  //selecting condition 
//    return ele;
//  }
  
// });

// console.log(outputArr);

// //Given an array 
// // ["AB","BC","AD","AK"]  -->input
// //  ["AB","AD","AK"]  ---->output

// let text = ["AB","BD","AF","AK"];
// let output = text.filter(function cb(ele){

//   if(ele.startsWith("A")){
//     return ele;
//   }
  
  
// })


// let outputwithmap=text.map(function cb(ele){

//   if(ele.startsWith("A")){
//     return ele;
//   }
  
  
// })

// console.log(outputwithmap)


// //MAX MIN=

// function maximumMethod(arr){

//     let maximum=0;
  
//     for(let i=0;i<arr.length;i++){
  
//       if(parseInt(arr[i])>maximum){
//         maximum=arr[i];
//       }
      
//     }
  
//     return maximum;
    
//   }
  
//   function minimumMethod(arr){
  
//     let minimum=Number.MAX_VALUE;
  
//     for(let i=0;i<arr.length;i++){
  
//       if(parseInt(arr[i])<minimum){
//         minimum=arr[i];
//       }
      
//     }
  
//     return minimum;
    
//   }
  //const arr=[1,2,3,4,519]
  //console.log(minimumMethod([1,2,3,4,5,88]))
  //console.log(Math.min(...arr))
  //const arr=[1,2,3,4,519]
  //console.log(maximum([1,2,3,4,519]))
  //console.log(Math.max(...arr));


//   //map function --->
// //1- if you want to apply an operation to every element of an array 
// // 2- you want output to be an array 
// // 3- you want the output array to have same length as input array 
// // 4- you want to do some operation on an array 


// // input array 

// const data=[
//     {
//       "_id": "62a372cbe5bb83afa31760a8",
//       "name": "Nikki Mosley",
          // "age" : "32"
//       "address": "782 Prince Street, Gallina, Utah, 4156"
//     },
//     {
//       "_id": "62a372cb48e56aa3d6016871",
//       "name": "Sampson Mercado",
          // "age" : "45"
//       "address": "148 Crystal Street, Macdona, South Dakota, 8488"
//     },
//     {
//       "_id": "62a372cb4aad1e8bc0525d17",
//       "name": "Johnston Myers",
          // "age" : "65"
//       "address": "846 Eldert Lane, Cashtown, North Dakota, 5586"
//     }
    
    
//   ]
  
//   // output ["Nikki Mosley","Sampson Mercado","Johnston Myers"]
//   // const temp= data.map(function foo(i,j){
//   //   return i.name
  
//   // })
//   // console.log(temp)






//   const inparray = ['AB' , 'AC', 'AD', 'BD'];
//   var outarray = inparray.filter(function cb (enj){
//     if(enj.startsWith("A")){
//     return enj;
//       }
//   })
//   console.log(outarray)
  
  
  
//   // HOW RETURN FUNCTION WORKS?
  
//   function Cooker(){
  
//     return "hi";  ///execution finishes here
  
//     /// 
  
//     console.log("I am worthless")
  
//     // you are cooking something inside it 
//     // you want to share the cooked item with outside world
  
//     // in that case only use return statement
    
//   }
  
  
  
//   const food=Cooker();
//   console.log(food);
  
//   //const tastyFood="cheese"+food;
  




  