let firstRecurringChar = (input) => {
  let mapChar = {};
  for (let item of input) {
    if (!mapChar) {
      mapChar[item] = 1;
    } else {
      return item;
    }
  }
};
console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 4]));
//# sourceMappingURL=FirstRecurringChar.js.map
