import { it, expect, describe } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

// Write tests for callback functions
describe('generateToken()', () => {
  it('should return token value', (done) => {
    const input = 'example@mail.com';
    generateToken(input, (err, token) => {
      try {
        expect(token).toBeDefined();
        // expect(token).toBe(2);
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
