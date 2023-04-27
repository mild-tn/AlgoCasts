// Input: nums = [1,2,3,1]
// Output: true
//-----------------
// Input: nums = [1,2,3,4]
// Output: false
//-----------------
var containsDuplicate = function (nums) {
    var charMap = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var char = nums_1[_i];
        if (!charMap[char]) {
            charMap[char] = 1;
        }
        else {
            charMap[char]++;
        }
    }
    for (var i in charMap) {
        if (charMap[i] > 1) {
            return true;
        }
    }
    console.log(charMap);
    return false;
};
console.log(containsDuplicate([1, 2, 3, 1]));
// ---- This is a very genius !!!!!
// var containsDuplicate = function(nums) {
//   if(nums.length !== new Set(nums).size){
//       return true
//   }
//   return false
// };
