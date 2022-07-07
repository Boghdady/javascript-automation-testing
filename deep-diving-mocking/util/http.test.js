import { it, expect, vi } from 'vitest';
import { sendDataRequest } from './http';

const testResponseData = { data: 'data' };

// replacement for original fetch global function
const fetchImpReplacement = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      reject('Please convert data to json');
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

// stubGloabel : used for global objects and functions replacement like fetch function
vi.stubGlobal('fetch', fetchImpReplacement);

it('should return any available response data', () => {
  const data = { data: 'any data' };
  expect(sendDataRequest(data)).resolves.toEqual(testResponseData);
});

it('should convert the provided data to json before sending a request', async () => {
  const data = { data: 'any data' };
  let errorMessage;
  try {
    await sendDataRequest(data);
  } catch (err) {
    errorMessage = err;
  }

  expect(errorMessage).not.toBe('Please convert data to json');
});
