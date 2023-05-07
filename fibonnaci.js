function fibnacci(n){
    const fib = [0,1];
      for(let i=2; i<n;i++){
        fib[i]= fib[i-1]+fib[i-2]; // Hear i-1 = previous index/ittaration, i-2 means previous previous index.
      } 
    return fib;
}

console.log(fibnacci(2));
//console.log(fibnacci(3));
console.log(fibnacci(7));