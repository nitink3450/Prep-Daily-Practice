// Q. Your school has the following grading system based upon the marks(M) obtained by a student:
// If M≤0, the grade will be E.
// If 11≥M≤20, the grade will be D.
// If 21≥M≤30, the grade will be C.
// If 31≥M≤40, the grade will be B.
// If 41≥M≤50, the grade will be A.
// Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.  


const findGrades = (a) => {
    switch(true){
      case (a <= 10) :
        return ' E ';
        
      case a >= 11 && a <= 20:
        return ' D ';
        
      case a >= 21 && a <= 30:
        return ' C ';
        
      case a >= 31 && a <= 40:
        return ' B ';
        
      case a >= 41 && a <= 50:
        return ' A ';
        
      default :
        return ' Invalid marks ';
        
    }
};
console.log(findGrades(49));