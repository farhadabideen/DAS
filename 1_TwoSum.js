//TC: O(n^2)
//SC: O(1)

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};


console.log(twoSum([2, 3, 4, 5, 6], 8))


//TC: O(n)
//SC: O(n)
var twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i]
    let complimentPair = target - value
    if (map[complimentPair] !== undefined) {
      return [map[complimentPair], i]
    } else {
      map[value] = i
    }
  }
};
console.log(twoSum([2, 3, 4, 5, 6], 8))