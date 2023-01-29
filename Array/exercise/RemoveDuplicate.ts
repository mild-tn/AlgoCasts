// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates2 = function(nums) {
  let insertIndex = 1;
  for(let i = 1; i < nums.length; i++){
      // We skip to next index if we see a duplicate element
      if(nums[i - 1] != nums[i]){  
          /* Storing the unique element at insertIndex index and incrementing
             the insertIndex by 1 */
          nums[insertIndex] = nums[i];  
          insertIndex++; 
      }
  }
  console.log(insertIndex, nums)
  return insertIndex;
};
console.log(removeDuplicates2([1,1, 1,2]))