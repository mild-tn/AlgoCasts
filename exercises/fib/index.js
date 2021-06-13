// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// with recursive
function fib(n) {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

// with for loop
// function fib(n) {
//   let fibonacci = [0, 1]

//   for (let index = 2; index <= n; index++) {
//     const a = fibonacci[index - 1]
//     const b = fibonacci[index - 2]
    
//     fibonacci = [...fibonacci, a + b]
//   }

//   return fibonacci[n]
// }

module.exports = fib;
