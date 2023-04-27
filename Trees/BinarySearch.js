const binarySearch = (nums, target) => {
  let low = 0;
  let height = nums.length - 1;
  let mid = 0;

  while (low <= height) {
    mid = Math.floor((low + height) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else if (nums[mid] > target) {
      height = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearch([2, 5, 6, 7, 12, 20], 4));
console.log(binarySearch([1, 5, 10], 1));
