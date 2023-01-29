function isPalindrome(s) {
  let p1 = 0, p2 = s.length - 1
  let middle = p2 / 2

  while (p1 <= p2) {
    if (s[p1] !== s[p2]) {
      return false
    }
    p1++
    p2--
  }


  return true
}

console.log(isPalindrome("RACEACAR"))