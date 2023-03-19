const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 20];

function swap(arrays, index1, index2) {
  let temp = arrays[index1];
  arrays[index1] = arrays[index2];
  arrays[index2] = temp;
}

function indexOfMin(arrays, startIndex) {
  let minIndex = startIndex;
  let minValue = arrays[startIndex];

  for (let i = minIndex + 1; i < arrays.length; i++) {
    if (arrays[i] < minValue) {
      minIndex = i;
      minValue = arrays[i];
    }
  }

  return minIndex;
}

function selectionSort(arrays) {
  const length = arrays.length;

  for (let i = 0; i < length; i++) {
    let minIndex = indexOfMin(arrays, i);
    swap(arrays, i, minIndex);
  }

  // return arrays[minIndex];
  return arrays;
}

// selectionSort(numbers);
console.log(selectionSort(numbers));
