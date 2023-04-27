function gcd(testVariable1, testVariable2) {
  testVariable1 = testVariable1 / 2;
  return gcd(testVariable1, testVariable2);
}

console.log(gcd(6, 9));
