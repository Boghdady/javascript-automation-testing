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
