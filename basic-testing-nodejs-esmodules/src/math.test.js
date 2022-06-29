import { it, expect } from 'vitest';
import { add } from './math';

it('should be calculate the sum of all the values in the array', () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expectedValue = numbers.reduce(
    (preValue, curValue) => preValue + curValue,
    0
  );

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expectedValue);
});

it('should yield NaN if a least one invalid number is provided', () => {
  const input = ['invalid', 1];

  const result = add(input);

  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const input = ['1', '3'];
  const result = add(input);

  expect(result).toBe(4);
});

it('should yield 0 if empty array is provided', () => {
  const input = [];

  const result = add(input);

  expect(result).toBe(0);
});

it('should throw an error if no value is passed into function', () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const arg1 = 1;
  const arg2 = 2;
  const resultFn = () => {
    add(arg1, arg2);
  };

  // toThrow args take the expected error that will happen
  expect(resultFn).toThrow(/is not iterable/);
});
