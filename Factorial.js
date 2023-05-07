//In Mathmatics, the factorial is non-negative integer 'n' donated 'n!' Hear all positive integers less than or equal to 'n'
//Factorial of zero is 1
//factorial(4) = 4*3*2*1 = 24
//factorial(4) = 5*4*3*2*1 = 120


function factorial(n) {
  let result = 1; //defaul value 1 becuse Factorial of zero is 1
  for (let i = 2; i <= n; i++) {//i=2 becuse 1*1=1, here 1 is one iteration that is less used.
    result = result * i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));