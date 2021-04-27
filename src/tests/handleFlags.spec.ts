import { DataError } from '../consts/dataError';
import { handleFlags } from '../handleFlags';
describe('handleFlags', () => {
  it('should fail if there are more than 3 flags', () => {
    expect(handleFlags('YNYN')).toThrowError(DataError);
  });
  it('should return an flags as an object', () => {
    expect(handleFlags('(Flags)YNY')).toMatchObject({
      gender: 'Female',
      student: 'No',
      employee: 'Yes',
    });
  });
});
