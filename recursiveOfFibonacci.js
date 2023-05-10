//6 = [ 0, 1, 1, 2, 3, 5, 8] Fibonacci number example.

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); //0
console.log(recursiveFibonacci(1)); //1
console.log(recursiveFibonacci(2)); //1
console.log(recursiveFibonacci(3)); //2
console.log(recursiveFibonacci(7)); //13
//Big-O = O(2^n) this is not good so recursive is not fit for fibonacci.