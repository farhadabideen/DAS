//Number greater than 1 and is not a product of two smaller numbers.
//isPrime(1)= false (>1, hear 1 is not greater than 1, it's equal.) 
//isPrime(5)= true (1*5 or 5*1)
//isPrime(4)= false (1*4 or 2*2 or 4*1)

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(21));
console.log(isPrime(5));
console.log(isPrime(4));

//Big-O = O(n)
