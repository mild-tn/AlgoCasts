function twoSum(nums, target) {
  // let tempNums = nums;
  // let sum = 0;

  // for (let index in nums) {
  //   for (let indexTemp in tempNums) {
  //     if (index !== indexTemp) {
  //       sum = tempNums[indexTemp] + nums[index];
  //       if (sum === target) {
  //         return [indexTemp, index];
  //       }
  //     }
  //   }
  // }

  // for(let i = 0; i < nums.length; i++){
  //     for(let j = i +1; j<nums.length;j++){
  //         if(nums[i] + nums[j] === target) return [i, j]
  //     }
  // }

  let i = 0
  let j = 0

  while (i < nums.length) {
    j = i + 1
    while (j < nums.length) {
      if (nums[i] + nums[j] === target) return [i, j]   
      j++
    }
    j = 0
    i++
  }
};

console.log(twoSum([3,2,4], 6))