//Q.Count the Heads
// Tina is given a string  S which contains the first letter of all the student names
//  in her class. She got a curiosity to check how many people have their names starting
//   from the same alphabet. So given a string  S , she decided to write a code that finds
//    out the count of characters that occur more than once in the string.



var Count_Occ = (s) => 
{
    
    let Arr = s.split("").sort();
    var p;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      p=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          p=acc+1;
        }
        return p;
      }, 0);
      map1.set(`${Arr[i]}` , p);
    }
    let z = [];
    map1.forEach((value,key)=>
    {
    if(value>1)
    {
      z.push(key + "" + value);
    }
    
    });
    return (z.join(""));
};
console.log(Count_Occ('prepbytes'))