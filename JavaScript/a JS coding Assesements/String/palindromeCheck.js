//Q.Plaindrome Check
// You are given a string S, Your task is to check wether the given string is a Palindrome
//  or not.A Palindrome is a string, which turnout same when read in reverse direction.
// Example: "naman" is a Palindrome.
// String can contain both upppercase lowercase letters.

var Palin_Check = (str) =>
{
	 let result= str.split('').reverse().join('');
	 if(result === str){
	   return 'True';
	 }
	 else
	 {
	   return 'False';
	 }
};
console.log(Palin_Check('Nitin'))
console.log(Palin_Check('nitin'))
// return (str.split("").reverse().join(""))===str?"True":"False"