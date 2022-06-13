//Q.Print the Odds.Write a program which takes  a number from user and
      // print all odd numbers in between 2 and N, but print 2 first.

      const Print_Odd = (N) => 
      {
           
           console.log('2');
           let num = 3;
           while(num <= N){
             console.log(num);
             num+=2;
           }
      };
      Print_Odd(10);