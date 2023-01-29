function reverse(str) {
  let reverse2 = "";
  if (!str || str.length < 2 || typeof string !== "string") {
    return "Hmmm that not good.";
  }
  for (let item of str) {
    reverse2 = item + reverse2;
  }
  return reverse2;
}
console.log(reverse("Hello"));
//# sourceMappingURL=ReverseStr.js.map
