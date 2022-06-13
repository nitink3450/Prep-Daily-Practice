//Q.Higher Age You are given an array A containing the age of persons in your locality,
// and your task is to find and return an array containing the age of persons that are
 //over 18 (18 included).

 const highAge = (N, Arr) => 
{
    const Arr1=[];
    for(var i=0; i<N ; i++){
        if(Arr[i] >= 18){
            Arr1.push(Arr[i]);
        }

    }
    console.log(Arr1);
};
highAge(6,[11,23,3,45,72,68]);

// const highAge = (N, Arr) => 
// {
//   let arr=[]
//   let j=0
  
//   for(let i=0;i<N;i++){
//     if(Arr[i]>=18){
//       arr[j++]=Arr[i]
//     }
//   }
  
//   return arr
  
    
// };
// let arr=new Array(31,2,41,51,16,8,32,30);
// let n=arr.length;

// console.log(highAge(n,arr));
 