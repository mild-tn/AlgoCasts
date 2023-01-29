
function findRepeatedSequences(s, k) {
  let sizeS = s.length
  let arr = [], indexS = 0
  let start = 0, end = k
  let mapDNA = {}, result = []

  while (end <= sizeS) {
    arr.push(s.substring(start, end))
    start++
    end++
  }

  for (let item of arr) {
    if (!mapDNA[item]) {
      mapDNA[item] = 1
    } else {
      result = [...result, item ]
      mapDNA[item]++
    }
  }

  console.log({...result})
  return result
}

findRepeatedSequences('AGACCCTAGAC', 3)