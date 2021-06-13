// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let fibonacci = [0, 1, 1, 2]

  if (n > fibonacci.length) {
    const setLength = n - fibonacci.length
    for (let i = 0; i <= setLength; i++) {
      const lastFibonacci = fibonacci[fibonacci.length - 1]
      const beforeLast = fibonacci[(fibonacci.length - 1) - 1]
      fibonacci = [...fibonacci, beforeLast + lastFibonacci]
    }
  } else {
    const lastFibonacci = fibonacci[fibonacci.length - 1]
    const beforeLast = fibonacci[(fibonacci.length - 1) - 1]
    fibonacci = [...fibonacci, beforeLast + lastFibonacci]
  }

  return fibonacci[n]
}

module.exports = fib;
