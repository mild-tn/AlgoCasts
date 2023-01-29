var removeDuplicates2 = function(nums) {
  let insertIndex = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] != nums[i]) {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }
  console.log(insertIndex, nums);
  return insertIndex;
};
console.log(removeDuplicates2([1, 1, 1, 2]));
//# sourceMappingURL=RemoveDuplicate.js.map
