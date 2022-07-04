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

// Write tests for promises
describe(' generateTokenPromise()', () => {
  // use promise feature in vitest
  it('should return token value', () => {
    const input = 'example@mail.com';
    return expect(generateTokenPromise(input)).resolves.toBeDefined();
  });

  // Uses async await
  it('should return token value: uses async await', async () => {
    const input = 'example@mail.com';
    const token = await generateTokenPromise(input);
    expect(token).toBeDefined();
  });
});
