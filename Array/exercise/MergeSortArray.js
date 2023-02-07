const mergeSortedArrays = (arr1, arr2) => {
  let mergeSortedArrays = [],
    current1 = arr1[0],
    current2 = arr2[0],
    i = 1,
    j = 1;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }
  while (current1 || current2) {
    if (current1 < current2) {
      mergeSortedArrays.push(current1);
      current1 = arr1[i];
      i++;
    } else {
      mergeSortedArrays.push(current2);
      current2 = arr2[j];
      j++;
    }
  }

  return mergeSortedArrays;
};

console.log(mergeSortedArrays([1, 3, 4, 5], [2, 6, 7, 8]));
console.log(mergeSortedArrays([], [2, 6, 7, 8]));
console.log(mergeSortedArrays([2, 6, 7, 8], []));
