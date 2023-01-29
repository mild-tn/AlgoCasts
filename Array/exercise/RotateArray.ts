// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

let rotate = function(nums, k) {
    var copy = nums.slice()
    nums.map((value, index) => {
        nums[index] = copy[(nums.length-(k%nums.length)+index)%nums.length]
    })
  return nums
};

console.log(rotate([1,2], 5))