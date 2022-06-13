// 8. You are given 3 distinct integers X,Y,and Z,and your task is to find and return
// the second smallest integer among the three provided integers.


const findSndSmallest = (x,y,z) => {
    if((x<y && y<z) || (x>y && y>z)){
      return y;
    }
    if((y<x && x<z) || (y>x && x>z)){
      return x;
    }
    else{
      return z ;
    }
};
console.log(findSndSmallest(34,6,9));