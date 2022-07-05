import { it, expect } from 'vitest';
import writeData from './io';

// Here is we have a side effect :  we write data on hard drive and that no the effiecnt thing
// so we will use
it('should excute the writeFile method', () => {
  const data = 'test dummy data';
  const filename = 'dummyData.txt';
  expect(writeData(data, filename)).resolves.toBeUndefined();
});
