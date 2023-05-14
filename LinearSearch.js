//Given an array of 'n' element and target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

//arr[-4,2,6,5,8] = 5  hear should return 3
//arr[-4,2,6,5,8] = 7  hear should return -1


function linearSearch(arr, target){
  for(let i=0; i < arr.length; i++){
    if(arr[i] === target)
      return i;
  }
  return -1;
  
}

console.log(linearSearch([-4,2,6,5,8],5));
console.log(linearSearch([-4,2-6,5,8],7));

//Big-O = O(n)
