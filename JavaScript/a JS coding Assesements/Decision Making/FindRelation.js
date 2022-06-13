//Q. PrepBuddy wants you to get familiar with various Relational operators. He provides you
// with two integer values X and Y and asks you to find the relation between them.The relationships
// between integers 
// X and Y are as follows:
// If X<Y, it means that X is smaller than Y.
// If X>Y, it means that X is greater than Y.
// If X= Y , it means that  X is equal to Y. 

const findRelation = (x,y) => {
    if(x < y){
      return (x +" is smaller than "+ y);
    }
    else if(x > y){
      return (x +" is greater than "+ y);
    }
    else{
      return (x +" is equal to "+ y);
    }
  };
  console.log(findRelation(10,9));