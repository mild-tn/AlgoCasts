let t1 = 0;
let t2 = 0;
const containCommonItem = (input1, input2) => {
  t1 = performance.now();
  let i = 0, j = 0;
  while (i < input1.length) {
    while (j < input2.length) {
      if (input1[i] === input2[j]) {
        return true;
      }
      j++;
    }
    j = 0;
    i++;
  }
  t2 = performance.now();
  console.log("RunTime =>", t2 - t1);
  return false;
};
console.log(containCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]));
console.log(containCommonItem(["a", "b", "c", "x"], ["z", "y"]));
const containCommonItem2 = (input1, input2) => {
  t1 = performance.now();
  let mapChar = {};
  for (let item of input1) {
    mapChar[item] = true;
  }
  for (let item of input2) {
    if (mapChar[item]) {
      return true;
    }
  }
  t2 = performance.now();
  console.log("RunTime =>", t2 - t1);
  return false;
};
console.log("=====================");
console.log(containCommonItem2(["a", "b", "c", "x"], ["z", "y", "x"]));
console.log(containCommonItem(["a", "b", "c", "x"], ["z", "y"]));
//# sourceMappingURL=ContainCommonItem.js.map
