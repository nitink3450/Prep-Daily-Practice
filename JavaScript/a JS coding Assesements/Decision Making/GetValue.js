// Q. You are provided with a table containing some characters and their corresponding values. 
//Your task will be to find the value from the table corresponding to an input character and return it.
// | P or p 	- PrepBytes      	|
// | Z or z 	- Zenith         	|
// | E or e 	- Expert Coder   	|
// | D or d 	- Data Structure 	|


const getValue = (a) => {
    switch(true){
      case(a === "p" || a === "P"):
        return 'PrepBytes';
      case(a === "z" || a === "Z"):
        return 'Zenith';
      case(a === "e" || a === "E"):
        return 'Expert Coder';
      case(a === "d" || a === "D"):
        return 'Data Structure';
      default:
        return 'Invalid';
    }
};
console.log(getValue('E'));