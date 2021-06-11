// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') ---> False

// Method 2
function anagrams(stringA, stringB) {
 return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;

// Method 1
// function anagrams(stringA, stringB) {
//   const strMapA = buildCharMap(stringA)
//   const strMapB = buildCharMap(stringB)
  
//   if (Object.keys(strMapA).length !== Object.keys(strMapB).length) {
//     return false
//   }
  
//   for (let char in strMapA) {
//     // check count of character if not equal return false.
//     if (strMapA[char] !== strMapB[char]) {
//       return false
//     }
//   }
  
//   return true
// }

// function buildCharMap(str) {
//   const cleanStr = str.replace(/[^\w]/g, '').toLowerCase()
//   const charMap = {}

//   for (const char of cleanStr) {
//     if (!cleanStr[char]) {
//       charMap[char] = 1
//     } else {
//       charMap[char]++
//     }
//     // or you can use this instead above.
//     // charMap[char] = charMap[char] + 1 || 1
//   }

//   return charMap
// }