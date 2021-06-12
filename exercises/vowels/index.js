// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

module.exports = vowels;

// Method 1
// function vowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u']
//   let countVowels = 0

//   for (let i = 0; i < vowels.length; i++) {
//     for (const char of str) {
//       if (char.toLowerCase() === vowels[i]) {
//         countVowels = countVowels + 1
//       }
//     }
//   }

//   return countVowels
// }

// Method 2
// function vowels(str) {
//   let countVowels = 0
//   let checker = 'aeiou'

//   for (const char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       countVowels++
//     }
//   }

//   return countVowels
// }