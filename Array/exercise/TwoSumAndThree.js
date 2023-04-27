// nums = [1, 9, 3, 5, 2]
// target = 6
// output: [1,5] or [1,3,2]
// if not return 'Not found'

function findTarget(arrays, target) {
  let i = 0;
  let j = 0;
  let result = [];

  while (j < arrays.length) {
    let sum = arrays[i] + arrays[j + 1];
    // if () {

    // }
    console.log(sum);
    i++;
    j++;
  }

  return result;
}

// console.log(findTarget([1, 9, 3, 5, 2], 8));
// [3,5]
// console.log(findTarget([1, 2, 4, 1], 8));
console.log(findTarget([6, 1, 2, 4, 1], 8));
// [1,1,2,4]
// [1,2,4,1]
