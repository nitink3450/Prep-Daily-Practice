// const countCharacters = (S) => 
// { 
//   let B=[];
//   let countA=0;
//   let countB=0;
//   for(let i=0; i<S.length; i++)
//   {
//     if('A' ==S.charAt(i))
//     {
//       countA+=1;
      
//     }
//     else if ('D' == S.charAt(i))
//     {
//       countB+=1;
      
//     }
    
//   }
//   B.push(countA);
//   B.push(countB);
//   return B;

// };
// console.log(countCharacters('AbaDd'))


// var Count_Occ = (s) => 
// {
// let count = 1;
//         let str = "";
//         let result = "";
//         for(let i=0;i< s.length;i++){
//           for(let j=i+1;j<s.length;j++){
//             str=s[i];
//             result = result+" "+s[i]+count;
//             s=s.replace(str," ");
//             s=s.split(str).join("");
            
//           }
//           count=1
//         }
//         return result.split(" ").sort().join("");  
// };
//  console.log(Count_Occ('prepbytes'))

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