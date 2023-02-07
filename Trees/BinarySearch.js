const binarySearch = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      high = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([2, 3, 4, 21, 1], 4));
console.log(binarySearch([4, 2, 1], 1));
