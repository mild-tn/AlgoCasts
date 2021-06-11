// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Method 2
function capitalize(str) {
  let words = []

  for (let word of str.split(' ')) {
    words = [...words, word[0].toUpperCase() + word.slice(1)]
  }

  return words.join(' ')
}

module.exports = capitalize;

// Method 1
// function capitalize(str) {
//   const words = str.split(' ')
//   let arrayWord = []

//   for (const word of words) {
//     let firstLetterUpperCase = word.replace(word[0], word.slice(0, 1).toUpperCase())
//     arrayWord = [...arrayWord, firstLetterUpperCase]
//   }

//   return arrayWord.join(' ')
// }