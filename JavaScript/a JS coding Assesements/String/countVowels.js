// //Q.Count the Vowels
// You are given a string S containing both uppercase and lowercase letters. You
//  need to find out the number of vowels in the given string.


var Count_Vowels= (S) => 
{
  
  let countvowels=  S.match(/[aeiou]/gmi).length;
     return countvowels;
};
 
console.log(Count_Vowels('prepbytes'))