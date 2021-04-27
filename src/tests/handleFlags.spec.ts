import { DataError } from '../consts/dataError';
import { handleFlags } from '../handleFlags';
describe('handleFlags', () => {
  it('should fail if there are more than 3 flags', () => {
    expect(() => {
      handleFlags('YNYN');
    }).toThrow(DataError);
  });
  it('should fail if there are less than 3 flags', () => {
    expect(() => {
      handleFlags('YN');
    }).toThrow(DataError);
  });
  it('should return an flags as an object', () => {
    expect(handleFlags('(Flags)YNY')).toMatchObject({
      gender: 'Female',
      student: 'No',
      employee: 'Yes',
    });
  });
});
