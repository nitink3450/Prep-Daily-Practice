//Q.Print the Pattern.Write a program which ask user for no of lines and
     // print a pattern using an asterik .


     const Print_pattern = (N) => 
     {
        for(var i = 0 ; i <= N ;i++){
          let res= '';
          for(var j = 0 ; j < i ; j++){
            res = res + "*";
          }
         console.log(res);
          }
          
     };
     Print_pattern();