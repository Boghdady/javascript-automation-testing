import { describe, it, expect, beforeEach } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  it('should instance of HttpError class contain the provided status code, message and data', () => {
    // 1) Arrange
    const statusCode = 201;
    const message = 'Test message';
    const data = { data: {} };

    // Act
    const httpError = new HttpError(statusCode, message, data);

    // Assertion
    expect(httpError.statusCode).toBe(statusCode);
    expect(httpError.message).toBe(message);
    expect(httpError.data).toBe(data);
  });

  it('should contain undefined as data if no data is provided', () => {
    // 1) Arrange
    const statusCode = 201;
    const message = 'Test message';

    // Act
    const httpError = new HttpError(statusCode, message);

    // Assertion
    expect(httpError.statusCode).toBe(statusCode);
    expect(httpError.message).toBe(message);
    expect(httpError.data).toBeUndefined();
  });
});

describe('class ValidatorError', () => {
  it('should contain the provided message', () => {
    const testMessage = 'test';

    const validationError = new ValidationError(testMessage);

    expect(validationError.message).toBe(testMessage);
  });

  it('should contain the undefinded message if no message provided', () => {
    const validationError = new ValidationError();

    expect(validationError.message).toBeUndefined();
  });
});
