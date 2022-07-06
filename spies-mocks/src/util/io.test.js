import { promises as fs } from 'fs';
import { it, expect, vi } from 'vitest';
import writeData from './io';

// Here is we have a side effect :  we write data on hard drive and that no the effiecnt thing
// so we will use Spies or Mocks
// when using mock, it automatically moved on the top of the file
vi.mock('fs');
// make sure that join method called with the filename in the last index of args
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        // return the filename
        return args[args.length - 1];
      },
    },
  };
});

it('should excute the writeFile method and resolve with no value', () => {
  const data = 'test dummy data';
  const filename = 'dummyData.txt';

  writeData(data, filename);

  expect(writeData(data, filename)).resolves.toBeUndefined();
});

it('should excute the writeFile method', () => {
  const data = 'test dummy data';
  const filename = 'dummyData.txt';

  writeData(data, filename);

  expect(fs.writeFile).toBeCalledWith(filename, data);
});
