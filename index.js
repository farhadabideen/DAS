function linearSearch(arr, target){
  for(let i=0; i < arr.length; i++){
    if(arr[i] === target)
      return i;
  }
  return -1;
  
}

console.log(linearSearch([-4,2,6,5,8],5));
console.log(linearSearch([-4,2-6,5,8],-4));