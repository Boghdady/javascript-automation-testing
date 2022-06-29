import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

describe('validateStringNotEmpty() Function', () => {
  it('should throw an error, if an empty string is provided', () => {
    const input = '';
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).toThrow();
  });

  it('should throw an error with a message that contains a reason (must not be empty)', () => {
    const input = '';
    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/must not be empty/);
  });

  it('should throw an error if any other value than a string is provided', () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};

    const resultFnNum = () => {
      validateStringNotEmpty(inputNum);
    };
    const resultFnBool = () => {
      validateStringNotEmpty(inputBool);
    };
    const resultFnObj = () => {
      validateStringNotEmpty(inputObj);
    };

    expect(resultFnNum).toThrow();
    expect(resultFnBool).toThrow();
    expect(resultFnObj).toThrow();
  });

  it('should not throw an error, if a non-empty string is provided', () => {
    const input = 'value';
    const resultFn = () => {
      validateStringNotEmpty(input);
    };
    expect(resultFn).not.toThrow();
  });
});

describe('validateNumber() Function', () => {
  it('should throw an error if NaN is provided', () => {
    const input = NaN;
    const resultFn = () => validateNumber(input);

    expect(resultFn).toThrow();
  });

  it('should throw an error with a message that contains a reason (invalid number)', () => {
    const input = NaN;
    const resultFn = () => validateNumber(input);
    expect(resultFn).toThrow(/Invalid number/);
  });

  it('should throw an error if a non-numeric value is provided', () => {
    const input = 'anything';
    const resultFn = () => {
      validateNumber(input);
    };
    expect(resultFn).toThrow();
  });

  it('should not throw an error, if a number is provided', () => {
    const input = 3;
    const resultFn = () => validateNumber(input);
    expect(resultFn).not.toThrow();
  });
});
