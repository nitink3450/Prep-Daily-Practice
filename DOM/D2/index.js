// Strings--->


let str="sting"; // array --chracter



// primitive types in js --->?
let str2='a valid string';
console.log(typeof str2);

// second way to create s tring 
// is using String constructor();
let str3=new String("i am an object"); // it doesnot create a primitive it creates object

console.log(typeof str3);


//toUpperCase();
let str22="hey there";
console.log(typeof str22);
/**
let temp=new String(str2);
temp.toUpperCase();

*/
console.log(str2.toUpperCase());


//let num=8;
//console.log(typeof num);

//let num2=new Number(2);
//console.log(typeof num2);

//let numBig=9007199254740991n;
//console.log(typeof numBig)
//let num4=90071992547409919999999999999999;
//console.log(num4);


// Equality of strings 
// == 

let a="hello";
let b=new String("yellow");
//console.log(a==b); // itonly check the values
//console.log(a===b);// it checks type as well


// localCompare method is used to checl whether  first string comes before or after the second string
console.log(a.localeCompare(b));

// 1 - then a comes after b 
// -1 - then a comes before b
// 0 - string are euqal 


// Reverse a string --->

//[1,2,3,4,5];
// rajat


function reverseStringCustom(str){
  var rev="";
  var i=str.length-1;

  while(i>=0){

    rev+=str.charAt(i);// str[i];
    i--;
  }

  return rev;
  
}

function reverseStringFor(k){

  let str2="";
for(let i=k.length-1;i>=0;i--){
   str2+=k[i];
}

//console.log(str2);
  return str2;
  
}

//console.log(reverseStringCustom("rajat"));
console.log()



// Reverse a string using inbuilt methods

let str="hello there";
// Convert this string in an array 

// split --converts string in an array 
console.log(str.split("").reverse().join(""))

// split --is used to break the string on the basis of delimitter and converts it into array

const str2="hey-there-how-are-you-?"
let arr=str2.split("-").reverse()

// convert an array into string 
// you have to use join method -counterpart of split

console.log(arr.join(" "));



function reverse2e(str){

    const arr=[];
    let ret="";
    for(let i=0;i<str.length;i++){
  
      arr.push(str[i]);
      
      
      }
  
    let arr2=arr.reverse();
  
      for(let i=0;i<arr2.length;i++){
  
   ret+=arr2[i];
      
      
      }
  
  return ret;
  }
  
  console.log(reverse2e("str"))