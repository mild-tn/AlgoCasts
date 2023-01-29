function twoSum(nums, target) {
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    j = i + 1;
    while (j < nums.length) {
      if (nums[i] + nums[j] === target)
        return [i, j];
      j++;
    }
    j = 0;
    i++;
  }
}
;
console.log(twoSum([3, 2, 4], 6));
//# sourceMappingURL=TwoSum.js.map
