// Create function to reverse string
// Hi my name is Mild
// dliM si eman ym iH
function reverse(str) {
  let reverse = "";
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Hmmm that not good.";
  }
  for (let item of str) {
    reverse = item + reverse;
  }
  return reverse;
}

console.log(reverse("Hello"));
