//Q.Find the Product.
    //Write a program that takes an array as input from the user and find out the product of the elements.

const Find_prod = (array,N) =>
{
    let prod=1;
    // for(let i=0;i<array.length;i++){
        for(let i=0;i<N;i++){
        prod*=array[i];
    }
    console.log(prod);
}
Find_prod([1,2,3,4,5],5)












