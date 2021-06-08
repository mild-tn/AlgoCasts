// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// third method
function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed
    debugger
  }
  return reversed
}

reverse('abcde')

module.exports = reverse;

// first method
// function reverse(str) {
//   const arr = str.split('')
//   arr.reverse()
//   return arr.join('')
// }

// second method
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed
//   }
//   return reversed
// }

// third method
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => character + reversed, '')
// }