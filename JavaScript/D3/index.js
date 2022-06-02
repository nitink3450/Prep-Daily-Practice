//#Arithmatic operators:
// 1.Addition
// 2.Substraction
// 3.Multiply
// 4.Division- quotient
// 5.Modulus-remainder

// console.log(2+3);//5
// console.log(2-3);//-1
// console.log(2*3);//6
// console.log(2/3);//0.666666666
// console.log(2%3);//2.....2 divident...3..divisior

//adding string
// console.log("hii" + "Shyam");//hiishyam..(this called as concatenation of strings)
// console.log("hii" +" "+ "Shyam");//hiishyam..(this called as concatenation of strings)..for adding space add double add
// console.log("hii" - "Shyam");//Nan-Not a number
// console.log("hii" * "Shyam");//Nan-Not a number
// console.log("hii" / "Shyam");//Nan-Not a number
// console.log("hii" % "Shyam");//Nan-Not a number

//No arithmatic operations are possible for the strings except addition which is basically is concatenation.
//comparison operators
//==,===,!=, !==, >,<,>=,<=

// console.log(2>3);//false..greater than
// console.log(2<3);//true...less than
// console.log(2<=3);//true....if anyone of the condition met then it will be true...less than equal to
// console.log(2>=3);//false...no conditions met .hence false....greater than equal

// console.log(2==3);//false..equal to
// console.log(2!=3);//true..not equal to
// console.log(2!==3);//true
// console.log(2===3);//false

//STRINGS= anything insides the quotes ('',"") it called strings.
//for integers:
// console.log(2 == '2');//true...check only values ..['2'..it is a string(type of data)..2 it is a integer(value)]
// console.log(2 === '2');//false...checks both the values and the type of data
// for strings:
// console.log("hi" == "hi");//true..both hi are strings.
// console.log("hi" == "Hi");//false..both hi are strings. but they r not same 
// console.log("hi" === "hi");//true...both hi are strings.
//to check the type of the data:
// console.log(typeof("hi"));//string
// console.log(typeof('hi'));//string
// console.log(typeof(2));//number

//Bitwise Operators:

// Bitwise And - a&b.. starts multiplying..1*1=1 1*0=0  0*0=0
// Bitwise OR - a|b..starts addition..1+1=1 1+0=1 0+0=0
// Bitwise XOR - a^b.. 0^0=0 1^1=0 1^0=1 0^1=1..pairs will give u zero
// Bitwise NOT - ~a..(negation).increases value by +1 but sign will be negative
// left shift - a << b...
//sign propogating right shift- a >> b
//zero fill right shift - a >>> b
//1byte=8bits
//binary operators:
// 128 64 32 16 8 4 2 1
//     0=00000000  0
//     1=00000001  1
//     2=00000010  10
//     3=00000011  11
//     4=00000100  0
//     5=00000101  1
//     6=00000110  10
//     7=00000111  11
//     8=00001000  0 
//     9=00001001  1
//    10=00001010  10
//    11=00001011  11

//o/p type- true/false
// console.log(2&3);//2...multiplication
// console.log(15&7);//7...multiplication
// console.log(2|3);//3....addition
// console.log(2^3);//1...0^0=0 1^1=0 1^0=1 0^1=1

// console.log(~2);//-3.....for negation the value will be -(number+1)
// console.log(~12);//-13.....
// console.log(~6);//-7.....

// console.log(2 << 3);//16....it will shift left by 3 in binary
// console.log(5 << 3);//40....it will shift left  by 3 in binary

// console.log(4 >> 3);//0....it will shift right by 3 in binary
// console.log(8 >> 3);//1....it will shift right by 3 in binary

// console.log(17 >>> 3);//2....add 3 zeros 
// 00010001=[000,00010]001..bracket has value 2
// console.log(27 >>> 3);//3....zero fill right shift
//00011011=[000,00011]011...bracket has value 3

