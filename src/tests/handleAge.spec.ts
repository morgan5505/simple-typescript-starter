import { handleAge } from '../handleAge';
import { DataError } from '../consts/dataError';

describe('handleAge', () => {
  it('should fail if age is not given', () => {
    expect(handleAge).toThrowError(DataError);
  });
  it('should return an age as a string', () => {
    expect(handleAge('(Age)22')).toBe('22');
  });
});
