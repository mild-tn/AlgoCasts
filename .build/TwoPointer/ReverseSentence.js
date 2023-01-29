function reverseWords(sentence) {
  let str = sentence.trim().replace(/  +/g, " ").split(" ");
  let reversed = [];
  for (let item of str) {
    reversed = [item, ...reversed];
  }
  return reversed.join(" ");
}
console.log(reverseWords("a good   example"));
function reverseWord(sentence) {
  sentence = sentence.trim().replace(/  +/g, " ");
  sentence = [...sentence];
  let strLen = sentence.length;
  sentence = strRev(sentence, 0, strLen - 1);
  let start = 0, end = 0;
  while (true) {
    while (start < sentence.length && sentence[start] == " ")
      start += 1;
    if (start == strLen)
      break;
    end = start + 1;
    while (end < strLen && sentence[end] != " ")
      end += 1;
    sentence = strRev(sentence, start, end - 1);
    start = end;
  }
  return sentence.join("");
}
function strRev(str, startRev, endRev) {
  while (startRev < endRev) {
    let temp = str[startRev];
    str[startRev] = str[endRev];
    str[endRev] = temp;
    startRev += 1;
    endRev -= 1;
  }
  return str;
}
//# sourceMappingURL=ReverseSentence.js.map
