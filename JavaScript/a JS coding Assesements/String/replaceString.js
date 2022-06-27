//Q.String Replace
// You are given a string S, along with a pattern string and a text string. You need to 
// repalce the pattern string in S to the text string.

var Replace = (S, pattern , text) => 
{
  return S.replace(pattern,text);
};
 
console.log(Replace('hii, i am you','you','nitin'))

