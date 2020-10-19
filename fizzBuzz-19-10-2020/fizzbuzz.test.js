const fizzBuzz = require('./fizzbuzz');

// * A number is fizz if it is divisible by 3 or if it has a 3 in it
// * A number is buzz if it is divisible by 5 or if it has a 5 in it

test('should print the number 1 as string', () => {
  expect(fizzBuzz(1)).toBe('1');
});

test('should print the number 2 as string', () => {
  expect(fizzBuzz(2)).toBe('2');
});

test('should print fizz if it is divisible by 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
});

test('should print fizz if 6 it is divisible by 3', () => {
  expect(fizzBuzz(6)).toBe('fizz');
});