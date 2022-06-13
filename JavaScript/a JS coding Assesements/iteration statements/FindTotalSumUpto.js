//Q.Find Sum You are given an integer N, and your task is to find the sum of
     //all the even integers starting from 1 upto N (N inclusive).


const findSum = (n) => {
let sum=0
let item=2
while(item<=n){
    sum=sum+item
    item+=2;
}
console.log(sum);
};
findSum(10); 