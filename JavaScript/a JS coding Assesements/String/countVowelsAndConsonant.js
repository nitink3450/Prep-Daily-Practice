//Q.Count the Vowels and Consonants
// You are given a string S containing both uppercase and lowercase letters. You need to 
// find out the number of vowels and the number of consonants in the given string.


var Count_Vowels= (S) => 
{
   return S.match(/[aeiou]/gmi).length; 
};
var Count_Consonants= (S) => 
{
  return S.match(/[^aeiou]/gmi).length; 
};
 
console.log(Count_Vowels('prepbytes'))
console.log(Count_Consonants('prepbytes'))