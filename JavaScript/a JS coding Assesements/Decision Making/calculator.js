// Q. Write a program to make a simple calculator using switch statement that takes operator and
// two numbers from user and print the result after operation.

const Calculator = (A, B, C) => 
{
 switch(A){
   case '+' :
     return (B + C);
     break;
   case '-' :
     return (B - C);
     break;
   case '*' :
     return (B * C);
     break;
   case '/' :
     return (B / C);
     break;
   default:
     return ("invalid");
     break;
}
}; 
console.log(Calculator('+',2,3))





  

  









    