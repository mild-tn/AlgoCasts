// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function swap(data, a, b) {
  let temp = data[a];
  data[a] = data[b];
  data[b] = temp;
  return data;
}

let moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0;
  for (let cur = 0; cur < nums.length; cur++) {
    if (nums[cur] !== 0) {
      swap(nums, lastNonZeroFoundAt++, cur);
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));

// let moveZeroes = function(nums) {
//     let arrayNonZero = []
//     let arrayZero = []

//     for (let item of nums) {
//       if (item === 0) {
//         arrayZero = [...arrayZero, item]
//       } else {
//         arrayNonZero = [...arrayNonZero, item]
//       }
//     }

//     let mergeArray = [...arrayNonZero, ...arrayZero]
//     for (let i in mergeArray) {
//       nums[i] = mergeArray[i]
//     }

//     return nums
// };
