const mergeSortedArrays = (arr1, arr2) => {
  let mergedArrays = [],
    tempArr1 = arr1[0],
    tempArr2 = arr2[0],
    i = 1,
    j = 1;

  while (tempArr1 || tempArr2) {
    if (!tempArr2 || tempArr1 < tempArr2) {
      mergedArrays.push(tempArr1);
      tempArr1 = arr1[i];
      i++;
    } else {
      mergedArrays.push(tempArr2);
      tempArr2 = arr2[j];
      j++;
    }
  }

  return mergedArrays;
};

console.log(mergeSortedArrays([1, 3, 4, 5, 3, 12], [2, 6, 7, 8, 9]));
// console.log(mergeSortedArrays([], [2, 6, 7, 8]));
// console.log(mergeSortedArrays([2, 6, 7, 8], []));
