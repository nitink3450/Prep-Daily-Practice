//Q.Find whether the number is present or not
  //Write a program which takes an array as input from the user and a number.
  //Check whether the number is present or not.


const Find_Num = (array,N,M) => 
{
  for(var i=0; i<N ; i++){
    if(M === array[i]){
      console.log('YES') ;
      break;
    }
  }
  console.log('NO') ;
};
let array = [1,2,3,4,5];
Find_Num(array,5,6)