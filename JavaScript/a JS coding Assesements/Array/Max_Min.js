//Q.Min and Max
// The problem statement is simple- given N elements, find the minimum and maximum
//  numbers among those elements.


function arrayMin(arr){
let min = arr[1];
    for(var i=0; i<N; i++){
        if(min > arr[i]){
            min = arr[i]
        }
    }
    return min;
}

function arrayMax(arr){
let max = arr[1];
    for(var i=0; i<N; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max;
}
let arr = [3,1,4,5,6,7,8];
N = arr.length;
console.log(arrayMin(arr,N),arrayMax(arr,N));

let arr1 = [0,0,0,0,0,0,0];
N = arr1.length;
console.log(arrayMin(arr1,N),arrayMax(arr1,N));



























// function arrayMin(arr,N) {
//     let n=N;
//     let result=arr[0];
//     for(let i=1;i<n;i++){
//       if(result>arr[i]){
//         result=arr[i]
//       }
//     }
//     return result;
//     }
//     function arrayMax(arr,N) {
//     let n=N;
//     let result1=arr[0];
//     for(let i=1;i<n;i++){
//       if(result1<arr[i]){
//         result1=arr[i];
//       }
//     }
//     return result1;
//     }
//    var arr=new Array(3,1,4,6,2,7);
//    var n=arr.length; 

//    var arr1=new Array(0,0,0,0,0,0)
//    var n1=arr.length;
// console.log(arrayMin(arr,n),arrayMax(arr,n));
// console.log(arrayMin(arr1,n1),arrayMax(arr1,n1));



// function arrayMin(arr) {
//     let min=arr[0];
//     for (let p of arr){
//       if(min>p){
//         min=p;
//       }
//     }
//     return min;  
// }
// function arrayMax(arr) {
//     let max=arr[0];
//     for (let p of arr){
//       if(max<p){
//         max=p;
//       }
//     }
//     return max;  
// }

// let arr = [3,1,4,5,6,7,8];
// console.log(arrayMin(arr),arrayMax(arr));
// let arr1 = [0,0,0,0,0,0,0];
// console.log(arrayMin(arr1),arrayMax(arr1));





