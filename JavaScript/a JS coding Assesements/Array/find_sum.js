//Q.Find the Sum. Write a program which takes an array as input from the user and
// find out the sum of the array elements.

const Find_Sum = (array, N) => 
{
  let sum = 0;
  for( let i=0;i<array.length;i++){
    sum+=array[i];
  }
return sum;
};
 
console.log(Find_Sum([1,2,3,4,5],5));