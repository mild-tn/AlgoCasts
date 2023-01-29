function max(arrayList) {
  let max2 = arrayList[0];
  for (let i = 1; i < arrayList.length; ++i) {
    if (arrayList[i] > max2) {
      max2 = arrayList[i];
    }
  }
  return max2;
}
function findMaxSlidingWindow(nums, w) {
  let window = [];
  let endPointer = w;
  let start = 0;
  while (endPointer <= nums.length) {
    let max2 = nums[start];
    for (let i = start; i < endPointer; i++) {
    }
    start++;
    endPointer++;
    window = [...window, max2];
  }
  console.log(window);
}
findMaxSlidingWindow([9, 5, 3, 1, 6, 3], 3);
findMaxSlidingWindow([9, 5, 3, 1, 6, 3], 2);
findMaxSlidingWindow([10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67], 2);
//# sourceMappingURL=FindMaximum.js.map
