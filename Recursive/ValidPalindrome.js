function validPalindrome(word, start, end) {
  let wordLength = Math.floor(word.length / 2);
  if (wordLength >= start) {
    return true;
  }
  if (word[start] !== word[end]) {
    return false;
  }
  start++;
  end--;
  return validPalindrome(word, start, end);
}

let data = "ambbma";
console.log(validPalindrome(data, 0, data.length));
data = "aabaa";
console.log(validPalindrome(data, 0, data.length));
