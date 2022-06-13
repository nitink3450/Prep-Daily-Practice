//Q.Print the Table Write a program which takes a number from user and print the table.
    

const Print_Table = (N) => 
{
for (let i = 1 ;i <= 10; i++ ){
    console.log( N +' * '+ i +' = ' + N * i);
} 
};
Print_Table(2);