const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 2 by 2', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  it('multiplies 0 by 5', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  it('multiplies 10 by 5', () => {
    expect(multiply(10, 5)).toBe(50);
  });

  it('multiplies -2 by 10', () => {
    expect(multiply(-2, 10)).toBe(-20);
  });

  it('multiplies -3 by -10', () => {
    expect(multiply(-3, -10)).toBe(30);
  });
});