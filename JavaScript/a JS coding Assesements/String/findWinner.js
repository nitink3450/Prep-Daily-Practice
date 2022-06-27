//Q.Find the Winner
// You are given a string S consisting of two letters A and D,where each character
//  represent the winner of N games played between Aditya and Danish, where letter A
//   represents the win of Aditya and letter D represents the win of Danish. 
// You need to find out the that which player wins the maximum number of games or there
// is a draw between them.

 
var Game_Winner = (S) => 
{
  let countA= S.match(/[A]/gmi).length;
  let countD= S.match(/[D]/gmi).length;
  if(countA > countD)
  {
    return 'Aditya';
  }
   else if(countA < countD)
  {
    return 'Danish';
  }
  else
  {
    return 'Draw';
  }
};
 console.log(Game_Winner('AAAADDDDD'))
 console.log(Game_Winner('AAAAADDDDD'))
 console.log(Game_Winner('AAAAAADDDDD'))