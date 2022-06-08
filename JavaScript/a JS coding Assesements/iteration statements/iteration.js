//Q.1.Find the number of digits
     //Take a number from the user and print the count of digits in that number.

// const Find_Digits = (N) => 
// {
//   let count = 0 ;
//   while(N !== 0){
//     count = count + 1;
//     N = parseInt(N / 10);
//       }
//       console.log(count);
// };
// Find_Digits(3450);

//Q.2.Find the Fives.
     //Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and
     // wants you to find out the number of times 5 occurred in the given number.

 
// const Find_Five = (N) => 
// {
//   let count=0;
//       while(N !== 0){
//      var remainder= N % 10;
//     N=parseInt(N / 10);//new value of N will be
//     if(remainder == 5){
//           count=count+1;
//     }
    
//   }
//   console.log(count);	 
// };  
// Find_Five(56565656);  

//Q.3.Find Sum You are given an integer N, and your task is to find the sum of
     //all the even integers starting from 1 upto N (N inclusive).


// const findSum = (n) => {
// let sum=0
// let item=2
// while(item<=n){
//     sum=sum+item
//     item+=2;
// }
// console.log(sum);
// };
// findSum(10);  

//Q.4.Find the sum of the digits of a given number.Write a program that takes
      // a number from the user and get the sum of the digits present in the number.


    //   const Number_Sum = (N) => 
    //   {
    //        let sum=0;
    //     while( N!==0 ){
    //       let remainder = N % 10;
    //       N =parseInt (N/10);
    //       sum=sum + remainder;
    //     }
    //     console.log(sum);
    //   };
    //   Number_Sum(1234); 

//Q.5.Print the Odds.Write a program which takes  a number from user and
      // print all odd numbers in between 2 and N, but print 2 first.

    //   const Print_Odd = (N) => 
    //   {
           
    //        console.log('2');
    //        let num = 3;
    //        while(num <= N){
    //          console.log(num);
    //          num+=2;
    //        }
    //   };
    //   Print_Odd(10);

//Q.6.Print the Pattern.Write a program which ask user for no of lines and
     // print a pattern using an asterik .


    //  const Print_pattern = (N) => 
    //  {
    //     for(var i = 0 ; i <= N ;i++){
    //       let res= '';
    //       for(var j = 0 ; j < i ; j++){
    //         res = res + "*";
    //       }
    //      console.log(res);
    //       }
          
    //  };
    //  Print_pattern();


//Q.7.Check whether a Number is a prime or not.Write a program which takes  a number from user and
     // check whether number is prime number or not a prime number.


    //  const Prime_Check = (N) => 
    //  { var res;
    //      if(N === 1){
    //        console.log('NO');
    //      }
    //      else if(N < 1){
    //        console.log('NO');
    //      }
    //      else{
    //        for(var i = 2; i < N; i++){
    //                  if(N % i === 0){
    //                       res = ('NO');
    //                        break;
    //                  }
    //                  else{
    //                       res = ('YES');
    //                  }
    //        }
    //        console.log(res);
    //    }
     
    //  };
    //  Prime_Check(11);

//Q.8.Print Numbers You are given an integer N, and your task is to print all the
     //integers starting from 1 till N  ( N inclusive)


    //  const printNumbers = (n) => {
    //     for(var i = 1 ; i <= n ; i++){
    //      console.log(i);
    //     }
    // };
    // printNumbers(10);
    
//Q.9.Print the Table Write a program which takes a number from user and print the table.
    

// const Print_Table = (N) => 
// {
// for (let i = 1 ;i <= 10; i++ ){
//     console.log( N +' * '+ i +' = ' + N * i);
// } 
// };
// Print_Table(2);































































