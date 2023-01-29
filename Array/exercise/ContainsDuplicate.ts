// Input: nums = [1,2,3,1]
// Output: true
//-----------------
// Input: nums = [1,2,3,4]
// Output: false
//-----------------

var containsDuplicate = function(nums) {  
  let countNums = {}

  for (let item of nums) {
    if (!countNums[item]) {
      countNums[item] = 1
    } else {
      countNums[item] = countNums[item] + 1
    }
  }

  for (let item in countNums) {
    if (countNums[item] > 1) {
      return true
    }
  }

  return false
};

console.log(containsDuplicate([1,2,3,1]))

// ---- This is a very genius !!!!!
// var containsDuplicate = function(nums) {
//   if(nums.length !== new Set(nums).size){
//       return true
//   }
//   return false
// };