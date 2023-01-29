const fizzBuzz = require("./index.js");

test("should have FizzBuzz Function", () => {
  expect(fizzBuzz).toBeDefined();
});

// test("multiples of both three and five print fizzBuzz", () => {
//   fizzBuzz(15);
//   expect(console.log.mock.calls[15][0]).toEqual("fizzBuzz");
// });

// test("should return fizzBuzz when mod 5 or 3", () => {
//   fizzBuzz(30);
//   expect(console.log.mock.calls[30][0]).toEqual("fizzBuzz");
// });

// test("should return fizz when mod 3 === 0", () => {
//   fizzBuzz(6);
//   expect(console.log.mock.calls[6][0]).toEqual("fizz");
// });

// test("should return buzz when input = 5", () => {
//   fizzBuzz(5);
//   expect(console.log.mock.calls[5][0]).toEqual("buzz");
// });

// test("should return buzz when mod 5 === 0", () => {
//   fizzBuzz(20);
//   expect(console.log.mock.calls[20][0]).toEqual("buzz");
// });

test("should log 1 2 fizz 4 buzz when input 5 into fizzBuzz()", () => {
  fizzBuzz(5);
  expect(console.log.mock.calls[0][0]).toEqual(1);
  expect(console.log.mock.calls[1][0]).toEqual(2);
  expect(console.log.mock.calls[2][0]).toEqual("fizz");
  expect(console.log.mock.calls[3][0]).toEqual(4);
  expect(console.log.mock.calls[4][0]).toEqual("buzz");
  expect(console.log.mock.calls.length).toEqual(5);
});

beforeEach(() => {
  jest.spyOn(console, "log");
});

afterEach(() => {
  console.log.mockRestore();
});
