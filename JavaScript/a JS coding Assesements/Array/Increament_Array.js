//Q.Increment the Array Elements
// You are provided an array of integers and you have to increment all array elements by 1 and
// then print whole array.


const Inc_Arr = (array,N) => 
{
    array.forEach(function(ele){
        console.log(ele + 1);
    })
};
Inc_Arr([1,2,3,4,5],5);