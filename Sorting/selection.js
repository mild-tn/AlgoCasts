const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 20];

const swap = (arrays, index1, index2) => {
  let temp = arrays[index1];
  arrays[index1] = arrays[index2];
  arrays[index2] = temp;
};

const indexOfMinium = (arrays, index) => {
  let minValue = arrays[index];
  let minIndex = index;

  for (let i = minIndex + 1; i < arrays.length; i++) {
    if (arrays[i] < minValue) {
      minIndex = i;
      minValue = arrays[i];
    }
  }

  return minIndex;
};

function selectionSort(arrays) {
  for (let i = 0; i < arrays.length; i++) {
    let minIndex = indexOfMinium(arrays, i);
    if (minIndex !== i) {
      swap(arrays, minIndex, i);
    }
  }
  return arrays;
}

console.log(selectionSort(numbers));
