// let arr=[1,2,3,4,5,6];
// /*let glob=0



// for(let i=0;i<arr.length;i++){

//   glob=glob+arr[i]
  
// }

// console.log(glob);


// console.log(
//   arr.reduce(function(glob,ele){
//       glob=glob+ele;
//     return glob;
//   },0)

  
// )
// */

// //filtering   // allth elements greater than 2
// // out put will be array 
// let outputarrar=[20,30,40];

// for(let i=0;i<arr.length;i++)
//   {
//     if(arr[i]>2){
//       outputarrar.push(arr[i]);
      
//     }
//   }

// console.log(outputarrar)

// console.log(

//   arr.reduce(function(){
    
//   },[])


  
// )

// function foo(a,b){
  
// }

// foo(2,[1,2,3,4]);


// //forEach,map,filter,reduce,some,very..they r specifically desighned for array and they need to pass call back function


// //REDUCE METHOD:

// //it reduce something array to some single value as an output.
// //it convert large data into single value.


// //conditions:
// //1.You have an array as input.
// //2.You want a single value as an output.
// //then go for this reduce method.


// //input can be:
// //1.array.
// //2.number.
// //3.string.
// //4.object literal.




// // Input   // Do this with reduce method --->
// [
//    {
//       barcode: ""
//       description: "META AM 29 XX Edition Large"
//       description2: ""
//       group: "COM20"
//    },

//    {,
//       barcode: ""
//       description: "META AM 29 TEAM Large"
//       description2: ""
//       group: "COM20"
//    }
// ]


// [
//    {
//       barcode: ""
//       description: "META AM 29 XX Edition"
//       description2: ""
//       group: "COM20"
//    },

//    {,
//       barcode: ""
//       description: "META AM 29 TEAM"
//       description2: ""
//       group: "COM20"
//    }
// ]
// //ans....using map method

// let data = [{
//     barcode: "",
//     description: "META AM 29 XX Edition Large",
//     description2: "",
//     group: "COM20"
//   },

//   {
//     barcode: "",
//     description: "META AM 29 TEAM Large",
//     description2: "",
//     group: "COM20"
//   }
// ]

// let result = data.map(ele => {
//   let lastword = ele.description.lastIndexOf(" ");
//   ele.description = ele.description.substring(0, lastword);


//   return ele;


// });

// console.log(result)


// //ans....using reduce method

// let data = [{
//     barcode: "",
//     description: "META AM 29 XX Edition Large",
//     description2: "",
//     group: "COM20"
//   },

//   {
//     barcode: "",
//     description: "META AM 29 TEAM Large",
//     description2: "",
//     group: "COM20"
//   }
// ]



// console.log(

// data.reduce(function(acc,ele){

//   // applying the condition ---->

//   // lastIndex is the string method that actually gives you the index of the last occurrence of string

// let lastword = ele.description.lastIndexOf(" ");
//   //console.log(lastword);
//   ele.description = ele.description.substring(0, lastword);
//   //here 0 to lastword means.for.e.g= description: "META AM 29 XX Edition Large" 1st we write 

//   acc.push(ele);

//   return acc;
  


  
  
// },[])
  
// )



// //Q.2.remove all duplicate countries names....
// // Input 
// var table = [
//       {
//         country:"india",
//         b:2
//       },
//       {
//          country:"usa",
//         b:33
//       },
//        {
//          country:"australia",
//         b:3
//       },
//        {
//          country:"india",
//         b:32
//       },
//        {
//          country:"southafrica",
//         b:31
//       },
//        {
//          country:"australia",
//         b:30
//       },
//       {
//         country:"india",
//         b:40
//       }
//     ];


// // Output  // you have to remove the duplicates from the array 

// var table = [
//       {
//         country:"india",
//         b:2
//       },
//       {
//          country:"usa",
//         b:33
//       },
//        {
//          country:"australia",
//         b:3
//       }, 
//        {
//          country:"southafrica",
//         b:31
//       }

//     ];

//     //code:

var table = [{
    country: "india",
    b: 2
  }, {
    country: "usa",
    b: 33
  }, {
    country: "australia",
    b: 3
  }, {
    country: "india",
    b: 32
  }, {
    country: "southafrica",
    b: 31
  }, {
    country: "australia",
    b: 30
  }, {
    country: "india",
    b: 40
  }];
  
  let result = table.reduce((acc, ele) => {
    if (acc.filter(el => el.country == ele.country).length == 0) {
      acc.push(ele)
    }
    return acc;
  
  }, [])
  console.log(result)

