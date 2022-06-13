// Q.Find the first digit of a 4 digit number
       //You are provided a four digit number N only. Your task is to print out the first digit of that number.

       
       const First_Digit = (n) => {
        while (n >= 10)
                n /= 10;
            return Math.floor(n);
    };
    console.log(First_Digit(9767));
              or//
          
const First_Digit = (n) => {
  return parseInt(n / 1000);
};
console.log(First_Digit(4567));