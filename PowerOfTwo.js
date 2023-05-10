//Problem: give a positive integer 'n', determine if the number is power of 2 or not. such that 'n' === 2^x

//isPowerOfTwo(1) = true --becouse we know (2^0) ===1
//isPowerOfTwo(2) = true --becouse we know (2^1) ===2
//isPowerOfTwo(8) = true --becouse we know (2^4) ===8
//isPowerOfTwo(5) = false


function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(4));

//Bio-O = O(logn) Becuse here (n = n / 2;) this line input size reduced by half.


function isPowerOfTwoBitWise(n){
  if (n < 1) {
    return false;
  }
  return (n & (n-1)) == 0;
}

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
console.log(isPowerOfTwoBitWise(4));

//Bio-O = O(1)
