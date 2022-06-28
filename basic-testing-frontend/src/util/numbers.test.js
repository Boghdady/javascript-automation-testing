import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should take a string arg and return a number', () => {
  const input = '1';

  const result = transformToNumber(input);

  expect(result)
    .toBe(+input)
    .toBeTypeOf('number');
});

it('should return NaN if the arg is not a number', () => {
  // arrange
  const input = 'invalid';
  const input2 = {};

  // act
  const result = transformToNumber(input);
  const result2 = transformToNumber(input2);

  // assert
  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
