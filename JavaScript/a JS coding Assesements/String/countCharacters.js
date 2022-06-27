//Q.Count Characters
// You are given a string S, and your task is to return an array B(having a size of 2),
//  where B[0] contains the count of character A (uppercase) in string S and B[1] contains
//   the count of character D (uppercase) in string S.


const countCharacters = (S) => 
{ 
  let B=[];
  let countA=0;
  let countB=0;
  for(let i=0; i<S.length; i++)
  {
    if('A' ==S.charAt(i))
    {
      countA+=1;
      
    }
    else if ('D' == S.charAt(i))
    {
      countB+=1;
      
    }
    
  }
  B.push(countA);
  B.push(countB);
  return B;

};
console.log(countCharacters('AbaDd'));






