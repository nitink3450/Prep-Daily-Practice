console.log('...........................................rest operator')

//#REST OPERATOR: (...args)
// -to pass infinite/multiple arguments without mentioning parameters
// -args is basically an array
//-to avoid lots of bugs
//e.g. SIMPLE MEHTOD:
function foo(a,b,c,d,e,f,g,h,i,j,k,l,m,n){
  console.log(a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
foo(1,2,3,4,5,6,7,8,9,10,11,12,13,14);//1,2,3,4,5,6,7,8,9,10,11,12,13,14

//e.g. USING REST OPERATOR:
function foo2(...args){
  console.log(args);//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  console.log(args[1]);//2
  console.log(args[3]);//4
  console.log(args[14]);//15
  console.log(args[0]);//1
}
foo2(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

console.log('.............................................regex')

//#Regular Expression(regex):

//-just some expressions they contain string
//-special characters * &
//-they r used for patterm matching in the large texts
//- to search a perticular word in whole webpage or paragraph
//-regex gives u the pattern for searchin in the string or i a large set of text.

// syntax: 
//      / [a-z] /g......global
//      / [0-9] /gm......multi line
//      / [a-z] /gmi....insensitive

console.log('.............................................charAt')

// javascripts METHODS

//# charAt(index):
//by simple-
let str='hello nitin';
console.log(str);// without method//hello nitin
console.log(str[4]);// without method//o
//using charAt()method:
console.log(str.charAt(4));// with method//o
console.log(str.charAt(12));//OUT OF LENGHT//O/P=NOTHING WILL PRINT(space)

//Internally converting primitive string into Object string for calling method
let st1=new String('nitin');
console.log(st1);// without method//[String: 'nitin']
console.log(st1.charAt(3));//with method//i

console.log('..............................................charCodeAt')

//#charCodeAt(index):
// -it gives u the character code(unicode) of the character at perticular index in string
//Unicode- its a character set and its the list of the characters with unique decimal numbers(code points).
//e.g. A=65, B=66, C=67..small letters contain different code.
let str3="hello there ABC";
console.log(str3.charCodeAt(3));//108
console.log(str3.charCodeAt(4));//111
console.log(str3.charCodeAt(8));//101
console.log(str3.charCodeAt(0));//104
console.log(str3.charCodeAt(14));//67
console.log(str3.charCodeAt(13));//66
console.log(str3.charCodeAt(12));//65

console.log('..................................................concat')

//#concat(str1,str2,..):

let str2='hi';
let str22='nitin';
console.log(str2.concat(str22));//hinitin
console.log(str2.concat(str22,'99',',',' ','nitin'));//hinitin99, nitin

//we can create out custom cancat

function customConcat(...string){
  let stringFinal='';
  for(let i = 0; i<string.length; i++){
    stringFinal+=string[i];
  }
  return stringFinal;
}
console.log(customConcat('nitin',' ', 'kanhurkar'))//nitin kanhurkar

console.log('..............................................includes()')

//#includes():
//- it checks whether word/character is present at string or not in the form of(true/false).
//-it looks for complete string

let str4='hello buddy 123'
console.log(str4.includes('he'));//true
console.log(str4.includes('2'));//true
console.log(str4.includes('hello '));//true
console.log(str4.includes(' '));//true
console.log(str4.includes('o b'));//true
console.log(str4.includes('ob'));//false

//-It works both on arrays as well as string
let arr=[1,2,3,4];
console.log(arr.includes(3));//true

console.log('..............................................match')

//#match():
//-used to check patterns and same characters or string r present or not in array and strings

console.log('........................................startsWith')

//#starsWith():
//-if u want to check whether a strings stars with a particular string
//- it checks for the complete string

let str5='nitin kanhurkar';
console.log(str5.startsWith('n'));
console.log(str5.startsWith('nitin'));
console.log(str5.startsWith('in'));
console.log(str5.startsWith('ka'));

console.log('........................................endsWith')

//#endsWith():

let str6= 'nitin kanhurkar';
console.log(str6.endsWith('n'))
console.log(str6.endsWith('r'))
console.log(str6.endsWith('kanhurkar'))
console.log(str6.endsWith('rkar'))

console.log('...........................indexOf() and lastIndexOf()')

//# indexOf() and lastIndexOf():
//-indexOf gives you the index of the string in the input string
//-it will give the index of the first occurance character
//-it also works on array
let str7="hello nitin im";
console.log(str7.lastIndexOf('nitin'));//6
console.log(str7.indexOf('nitin'));//6
console.log(str7.lastIndexOf('i'));//12
console.log(str7.indexOf('i'));//7
console.log(str7.indexOf('in'));//9

//works with array aslo
let arr1=['hello','nitin','im'];
console.log(arr1.indexOf('nitin'))//1
console.log(arr1.indexOf('ni'))//-1//if it not found it will return -1

console.log('...............to check character occurance/count')

//To check character occurance:

function checkAll(str8,char){
  let occ=[];
  for(let i=0; i<str8.length; i++){
    if (str8.charAt(i) == char)
    {
      occ.push(i);
    }
  }
  return occ;
}
console.log(checkAll('alPhagama','a'))

//To check character count:

function checkCount(str9,char1){
  let count=[];
  for(let i=0; i<str9.length; i++){
    if (str9.charAt(i) == char1)
    {
      count.push(i);
    }
  }
  return count.length;
}
console.log(checkCount('alPhagama','a'))

//OR

function checkCount1(str10,char1){
  let count1=0;
  for(let i=0; i<str10.length; i++){
    if (str10.charAt(i) == char1)
    {
      count1+=1;
    }
  }
  return count1;
}
console.log(checkCount1('alPhagaaaama','a'))

console.log('........................................repeat()')

//#repeat(times to multiple):
//- to repeat the original string by given number of times and appends it and returns it to the output.

let str11='hello there';
console.log(str11.repeat(10));
console.log(str11.repeat(2));

console.log('.......................replace() and replaceAll()')

//#replace(to replace value, replace with value):
//#replaceAll();

//-if u want to replace a part of string with something else you can use replace method
//-replace only replaces the first occurence
//-replaceAll replsces the all occureances

let str12='hello hey dude';
console.log(str12.replace('he','07'));
console.log(str12.replaceAll('he','07'));

console.log('........................................search()')

//#search():
//-it is used to search a string in your js
//-it returns the index of the starting occurance
//-it takes a regular expression
//-if u r passing a string then it converts it into a regular expression
let str13='hey there how are u doing 3450'
  console.log(str13.search(/[0-9]/g));//26//with regex
  console.log(str13.search(/[4-5]/g));//27
  console.log(str13.search(/[1-2]/g));//-1//if not present in string it will return -1
  console.log(str13.search(/[a-z]/g));//0
  console.log(str13.search(/[how]/g));//0
  console.log(str13.search(/[a]/g));//14
  console.log(str13.search(/[e]/g));//1
  console.log(str13.search('a'));//14//without using regex//it will automatically/internally convert into regex
  console.log(str13.search('d'));//20

console.log('........................................match()')

//#match();
//-it returns an array which satisfies the condition or regex you are passing
//-
let str14="hello 3450"
console.log(str14.match(/[1-9]/g))//['3','4','5']
console.log(str14.match(/[a-z]/g))//['h','e','l','l','o']

console.log('........................................trim()')

//#trim():
//-used to remove the white spaces at starting and ending of the string
//-its not remove the space betweeen strings
let str15=' hello     there '
console.log(str15.trim())//hello there

let str16="hello there";
let str17=" hello there";
console.log(str16 == str17)//false
console.log(str16 == str17.trim())//true

console.log('................slice(),subString() and subStr()')

// There are 3 methods for extracting a part of a string:

// slice(start, end)..(end not included).
// substring(start, end)
// substr(start, length)

//-slice() extracts a part of a string and returns the extracted part in a new string.
//-substring() is similar to slice().The difference is that start and end values less than 0(negative values) are treated as 0 in substring()
//-substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.

// #What they have in common:

// 1.If start equals end : returns an empty string
// 2.If end is omitted(neglected): extracts characters to the end of the string
// 3.If either argument is greater than the string's length, the string's length will be used instead.
  
// #Distinctions of substring():

// 1.If start > end , then substring will swap those 2 arguments.
// 2.If either argument is negative or is NaN, it is treated as if it were 0.

// #Distinctions of slice():

// 1.If start > end , slice() will return the empty string. ("")
// 2.If start is negative: sets char from the end of string.
// 3.If end is negative: sets end  to: string.length – Math.abs(end) (original value), except bounded at 0 (thus, Math.max(0, string.length + end)).

let str18 = "banana, apple, kiwi";
//slice()
console.log(str18.slice(0,6));//banana//end index not included
console.log(str18.slice(0,0));//empty string//start,end same
console.log(str18.slice(6,6));//empty string
console.log(str18.slice(0));//banana, apple, kiwi//till end of string printed
console.log(str18.slice(0,20));//banana, apple, kiwi//string length will be printed 
console.log(str18.slice(6,0));//empty string 
console.log(str18.slice(-11,-6));//apple 
console.log(str18.slice(-11,20));//apple, kiwi
console.log(str18.slice(0,-13));//banana

//subString()
console.log(str18.substring(0,6));//banana
console.log(str18.substring(-12,6));//banana//negative value treated as 0(zeero)
console.log(str18.substring(-11,-14));//empty string(0,0)
console.log(str18.substring(1,6));//anana
console.log(str18.substring(0,20));//banana, apple, kiwi

//substr
console.log(str18.substr(0,6))//banana//start,length
console.log(str18.substr(8,2))//ap
console.log(str18.substr(15,4))//kiwi
console.log(str18.substr(-11,6))//apple,

