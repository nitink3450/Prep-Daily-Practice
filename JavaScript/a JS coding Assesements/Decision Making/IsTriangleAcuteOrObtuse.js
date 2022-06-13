// 9. Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

const Triangle_Check = (A,B,C) => {
    if((A > 90 && B < 90 && C < 90) || (B > 90 && A < 90 && C < 90) || (C > 90 && B < 90 && A < 90)) {
      return 'obtuse';
    }
    else{
      return 'acute';
    }
};
console.log(Triangle_Check(60,90,30));