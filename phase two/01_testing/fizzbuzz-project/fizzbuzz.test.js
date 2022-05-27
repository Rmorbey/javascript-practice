const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it('fizzBuzz(3) should return Fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('fizzBuzz(5) should return Buzz', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('fizzBuzz(15) should return FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  })

  it('fizzBuzz(8) should return 8', () => {
    expect(fizzBuzz(8)).toBe(8);
  })
  
});