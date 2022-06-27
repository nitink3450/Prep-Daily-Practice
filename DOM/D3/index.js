
// String methods 

// mutabaility vs immutablity 
//charAt // method actually gives you the characterAt the pa

//primitives
//Objects
//charcters array as well //
//let str="hello there";
///console.log(str[1]);//e
// Ascci codes
// unicodes

//let g='h';
//console.log(str[14])
//console.log(str.charAt(2))

//charCodeAt(index) gives you the caharacter code of character at particular index ins tring
//console.log(str.charCodeAt(2));
//concat method

//let str1="hi";
//let str2="john";
//console.log(str1.concat(str2,",","ding","dong","*"));


//includes method
// looks for complete string ---> in the input string
//let str="hello buddy";

//console.log(str.includes("o "));


//let strarr=[1,2,3,4,5];
//console.log(strarr.includes(93));
/**
new String(str);
*/
///str.charAt(0);

//startsWith
// if you want to check whether a string starts with a particular string 
//it checks for the complete string 


let st="johncena";
//console.log(st.startsWith("c"));

//endsWith 
// if you want to check whether the string ends with a particular string or not

//console.log(st.endsWith("johncena"))

//indexOf gives you the index of string in the input string

let str="somethingelse";
console.log(str.indexOf("s")); // index of first occurence
console.log(str.lastIndexOf("s"));  // index of last occurrence
//let arr=["john","wwe","khali"];
//console.log(arr.indexOf("khalie"));


//function to check all occurences of character in the input string

// 


function checkAllChar(str,char){

  const ocarr=[];

  for(let i=0;i<str.length;i++){
    if(str.charAt(i)==char)
    {
      ocarr.push(i);
    }


    
  }

  
return ocarr.length;
}
/*
function checkAllString(str,checkstr){

    const ocarr=[];

  for(let i=0;i<str.length;i++){
    if(str.charAt(i)==char)
    {
      ocarr.push(i);
    }


    
  }

  
return ocarr;


  
}
*/

//console.log(checkAllChar("alphagama","a"))

//let str= 




//repeat method string 
// it repeats the original string by given number of times and appends it and returns it to the output
let str="hello there";
//console.log(str.repeat(20));


//replace method

// if you want to replace a part of string with something else you can use replace method

//replace only replaces the first Occurence
//console.log(str.replace("hello there","23"));

//replaceAll replaces all the occurrences of string 
//console.log(str.replaceAll("he","23"));

//search Method string

// Regular expression ? // regex ??

// just some expression they contain string 
//special characters * &
//they are used for pattern matching in the large texts

// searchfor all the questions that are from js
// India

// regex gives you the pattern for searching in the string or in a large set of text


//search

//it is used to search a string in your js 
// it takes aregular expression
// if you are passing a string then it converts it into a regular expression

//let str2="12345656655666ab";
//console.log(str2.search("a"))

/// match method returns an array which staisfies the condition or regex you artae passing
//console.log(str2.match(/[4-9]/g))

//trim method is used to remove white spaces from string
// in starting 
// or in end

let stre="hello there";
let stre2=" hello  there ";

console.log(stre==stre2.trim()); //output ??
//console.log(stre.trim());
