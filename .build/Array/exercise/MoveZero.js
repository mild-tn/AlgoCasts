function swap(data, a, b) {
  let temp = data[a];
  data[a] = data[b];
  data[b] = temp;
  return data;
}
let moveZeroes = function(nums) {
  for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
    if (nums[cur] !== 0) {
      swap(nums, lastNonZeroFoundAt++, cur);
    }
  }
  return nums;
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
//# sourceMappingURL=MoveZero.js.map
