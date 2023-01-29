var containsDuplicate = function(nums) {
  let countNums = {};
  for (let item of nums) {
    if (!countNums[item]) {
      countNums[item] = 1;
    } else {
      countNums[item] = countNums[item] + 1;
    }
  }
  for (let item in countNums) {
    if (countNums[item] > 1) {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
//# sourceMappingURL=ContainsDuplicate.js.map
