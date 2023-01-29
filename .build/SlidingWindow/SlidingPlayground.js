function slidingImplementation(str1, str2) {
  let sizeStr1 = str1.length, sizeStr2 = str2.length;
  let length = Infinity;
  let indexS1 = 0, indexS2 = 0, minSubsequence = "";
  while (indexS1 <= sizeStr1) {
    if (str1[indexS1] === str2[indexS2]) {
      indexS2++;
      if (indexS2 == sizeStr2) {
        let start = indexS1, end = indexS1 + 1;
        console.log(str1[start], str2[indexS2]);
      }
    }
    indexS1++;
  }
  console.log(minSubsequence);
  return minSubsequence;
}
slidingImplementation("fgrqsqsnodwmxzkzxwqegkndaa", "kzed");
//# sourceMappingURL=SlidingPlayground.js.map
