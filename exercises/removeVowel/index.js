// Remove Vowel that provide on array from the String and Non-Case Sensitive.
// Example
// removeVowel('Hello I'm iron man.', ['e', 'a', 'i'])
// output: Hllo 'm ron mn.
// removeVowel('HELLO I'm iron man.', ['e', 'a', 'i'])
// output: HLLo 'm ron mn.

function removeVowel(letters, vowels) {
  let splitLetters = letters.split('')
  
   for (const index in splitLetters) {
     for (const vowel of vowels) {
        if (splitLetters[index].toLowerCase() === vowel) {
          splitLetters[index] = ''
        }
     }
   }
  return splitLetters.join('')
}

module.exports = removeVowel;