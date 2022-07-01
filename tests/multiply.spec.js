const { multiply } = require('../calculator');

describe('Multiply', () => {
  test('should return the multiplication of two positive integers', () => {
    const result = multiply(4, 8);
    expect(result).toBe(32);
  });

  test('should return a negative number when a negative and a positive integer are multiplied', () => {
    const result = multiply(-6, 5);
    expect(result).toBe(-30);
  });

  test('any number multiplied by 0 equals 0', () => {
    const result = multiply(23, 0);
    expect(result).toBe(0);
  });
});
