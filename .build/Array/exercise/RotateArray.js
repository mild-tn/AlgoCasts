let rotate = function(nums, k) {
  var copy = nums.slice();
  nums.map((value, index) => {
    nums[index] = copy[(nums.length - k % nums.length + index) % nums.length];
  });
  return nums;
};
console.log(rotate([1, 2], 5));
//# sourceMappingURL=RotateArray.js.map
