import { it, expect, describe } from 'vitest';

import { transformToNumber, cleanNumbers } from './numbers';

describe('transformToNumber() ', () => {
  it('should transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input);

    expect(result).toBeTypeOf('number');
  });

  it('should transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input);

    expect(result).toBe(+input);
  });

  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return array of numbers values of array of string values are provided', () => {
    const input = ['1', '2'];
    const result = cleanNumbers(input);

    // expect(result[0]).toBeTypeOf('number');
    expect(result).toEqual([1, 2]);
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const input = ['', 1];
    const resultFn = () => cleanNumbers(input);

    expect(resultFn).toThrow();
  });
});
