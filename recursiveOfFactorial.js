function recursiveFactorial(n){
  if(n == 0){
    return 1;
  }
  return n* recursiveFactorial(n-1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(3));

//Hear non negative number required. 
// 0! = 1
// 1! = 1*1
// 2! = 2*1
// 3! = 3*2*1
// 4! = 4*3*2*1
//Hear n! = n* (n-1)!


