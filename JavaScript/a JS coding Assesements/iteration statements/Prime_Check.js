//Q.Check whether a Number is a prime or not.Write a program which takes  a number from user and
     // check whether number is prime number or not a prime number.


     const Prime_Check = (N) => 
     { var res;
         if(N === 1){
           console.log('NO');
         }
         else if(N < 1){
           console.log('NO');
         }
         else{
           for(var i = 2; i < N; i++){
                     if(N % i === 0){
                          res = ('NO');
                           break;
                     }
                     else{
                          res = ('YES');
                     }
           }
           console.log(res);
       }
     
     };
     Prime_Check(11);