import { it, describe, expect, vi } from 'vitest';
import { generateReportData } from './data';

describe('generateReportData()', () => {
  it('should excute logFn if provided', () => {
    // create a function that keep track the execution of any argument will provided to this function
    const loggerFn = vi.fn();
    generateReportData(loggerFn);
    expect(loggerFn).toBeCalled();
  });
});
