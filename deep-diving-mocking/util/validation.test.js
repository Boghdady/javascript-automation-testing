import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it('should throw an error if empty text is provided', () => {
  const inputText = '';
  const resultFn = () => validateNotEmpty(inputText);

  expect(resultFn).toThrow();
});

it('should throw an error if empty blank string provided', () => {
  const inputText = '    ';
  const resultFn = () => validateNotEmpty(inputText);

  expect(resultFn).toThrow();
});

it('should throw an error with provided error message', () => {
  const inputText = '';
  const errorMessage = 'String should not be empty';

  const resultFn = () => validateNotEmpty(inputText, errorMessage);

  expect(resultFn).toThrow(errorMessage);
});
