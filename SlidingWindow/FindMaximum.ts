// Given an integer array and a window of size w, find the current maximum value in the window as it sliders through the entire array
// Note: if the window size is greate than the array size, we consider the entire array as a single window.

function max(arrayList) {
  let max = arrayList[0];
  for (let i = 1; i < arrayList.length; ++i) {
    if (arrayList[i] > max) {
      max = arrayList[i];
    }
  }
  return max
}

function findMaxSlidingWindow(nums, w) {
  let window = []
  let endPointer = w
  let start = 0

  while (endPointer <= nums.length) {
    let max = nums[start]
    for (let i = start; i < endPointer; i++) {
      
    }
    start++
    endPointer++
    window = [...window, max]
  }

  console.log(window)
}

findMaxSlidingWindow([9, 5, 3, 1, 6, 3], 3)
// [9, 5, 6, 6]
findMaxSlidingWindow([9, 5, 3, 1, 6, 3], 2)
// [9, 5, 3, 6, 6]
findMaxSlidingWindow([10,6,9,-3,23,-1,34,56,67,-1,-4,-8,-2,9,10,34,67] , 2)