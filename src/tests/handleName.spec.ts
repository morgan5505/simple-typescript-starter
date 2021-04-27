import { handleName } from '../handleName';
import { DataError } from '../consts/dataError';

describe('handleName', () => {
  it('should fail if name is not given', () => {
    expect(handleName).toThrowError(DataError);
  });
  it('should return an age as a string', () => {
    expect(handleName('(Name)Jane Smith')).toBe('Jane Smith');
  });
});
