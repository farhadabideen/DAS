function fibnacci(n) {
  const fib = [0, 1]; // This is fibonacci default/initial value.
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; // Hear i-1 = previous index/ittaration, i-2 means previous previous index.
  }
  return fib;
}

//8 = [ 0, 1, 1, 2, 3, 5, 8, 13] Fibonacci number example.

console.log(fibnacci(2));
//console.log(fibnacci(3));
console.log(fibnacci(7));

////Big-O = O(n)