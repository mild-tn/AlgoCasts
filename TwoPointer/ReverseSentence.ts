function reverseWords(sentence) {
  let str = sentence.trim().replace(/  +/g, ' ').split(' ')
  let reversed = []
  for (let item of str) {
    reversed = [item, ...reversed]
  }

  
  return reversed.join(' ')
}

console.log(reverseWords('a good   example'))
// "World Hello"


function reverseWord(sentence) {
    // Replace multiple spaces with single space
    sentence = sentence.trim().replace(/  +/g, ' ');
    // We need to convert the input strings
    // to lists of characters as strings are immutable in JavaScript
    sentence = [...sentence];
    // To reverse all words in the string, we will first reverse
    // the entire string.
    let strLen = sentence.length;
    sentence = strRev(sentence, 0, strLen - 1);

    //  Now all the words are in the desired location, but
    // in reverse order: "Hello World" -> "dlroW olleH".

    // Now, let's iterate the sentence and reverse each word in place.
    // "dlroW olleH" -> "World Hello"
    let start = 0,
        end = 0;

    while (true) {
        // find the start index of each word by detecting spaces.
        while (start < sentence.length && sentence[start] == " ") start += 1;

        if (start == strLen) break;

        // find the end index of the word.
        end = start + 1;
        while (end < strLen && sentence[end] != " ") end += 1;

        // let's call our helper function to reverse the word in-place.
        sentence = strRev(sentence, start, end - 1);
        start = end;
    }
    return sentence.join("");
}

// a function that reverses a whole sentence character by character
function strRev(str, startRev, endRev) {
    // Starting from the two ends of the list, and moving
    // in towards the centre of the string, swap the characters
    while (startRev < endRev) {
        let temp = str[startRev]; // temp store for swapping
        str[startRev] = str[endRev]; // swap step 1
        str[endRev] = temp; // swap step 2

        startRev += 1; // move forwards towards the middle
        endRev -= 1; // move backwards towards the middle
    }
    return str;
}