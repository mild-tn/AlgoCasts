function groupTitle(str) {
  const hashMap = {};
  for (let word of str) {
    const count = new Array(26).fill(0);

    // result of to do this: ['0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0'] in hashmap
    for (let char of word) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      count[index] = +1;
    }

    // if count = '0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0' in hashmap, push word that is duel value into hasmap
    // { '0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0': ['duel'] }
    // else push count that new key into hashMap
    if (count in hashMap) {
      hashMap[count].push(word);
    } else {
      hashMap[count] = [word];
    }
  }

  return hashMap;
}

let titles = ["duel", "dule", "speed", "spede", "deul", "cars"];
let gt = groupTitle(titles);
let query = "de";

// console.log(gt);

// Object.entries(gt) = convert object to array like below:
// [_, g] = [ '0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0',
//  [ 'duel', 'dule', 'deul' ]] ==> please observe type of this result is array
for (let [_, g] of Object.entries(gt)) {
  // console.log("====>", [_, g]);
  if (g.includes(query)) {
    console.log(g);
  }
}
