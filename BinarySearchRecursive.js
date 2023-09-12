function binarySearch(arr, target) {

  return searchIndex(arr, target, 0, arr.length - 1)

}

function searchIndex(arr, target, leftIndex, rightIndex) {

  if (leftIndex > rightIndex) {
    return -1;
  }

  let middIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middIndex]) {
    return middIndex;
  }

  if (target < arr[middIndex]) {
    return searchIndex(arr, target, rightIndex, middIndex - 1);
  }
  else {
    return searchIndex(arr, target, middIndex + 1, rightIndex);
  }
}



console.log(binarySearch([3, 9, 10, 11, 12, 13, 23], 23));