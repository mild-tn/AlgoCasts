// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
//------------------
// Input: nums = [5,4,-1,7,8]
// Output: 23
//------------------

// Dynamic Programming
// https://www.youtube.com/watch?v=tmakGVOGV3A
// const maxSumSubArray = function (nums) {
//   let max = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     // เทียบค่า Max ตำแน่งปัจจุบัน กับ ค่าของตำแหน่งปัจจุบัน + ค่าของตำแหน่งก่อนหน้า
//     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//     // ได้ค่า Max ล่าสุด
//     max = Math.max(max, nums[i]);
//   }
//   return max;
// };

const maxSumSubArray = function (nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    console.log(nums[i], nums[i] + nums[i - 1]);
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    max = Math.max(max, nums[i]);
  }
  return max;
};

// console.log(maxSumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSumSubArray([5, 4, -1, 7, 8]));
console.log(maxSumSubArray([5, 7, 8]));
