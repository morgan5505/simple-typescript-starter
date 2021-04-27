import { handleAge } from './handleAge';

describe('test', () => {
  // test('handleAge', async () => {
  //   expect(1 + 1).toEqual(2);
  // });
  // test('handleCityState', async () => {
  //   expect(1 + 1).toEqual(2);
  // });
  // test('handleFlags', async () => {
  //   expect(1 + 1).toEqual(2);
  // });
  // test('handleNames', async () => {
  //   expect(1 + 1).toEqual(2);
  // });
});

describe('handleAge', () => {
  it('should fail if age is not given', () => {
    expect(handleAge).toThrow();
  });
  it('should return an age as a string', () => {
    expect(handleAge('(Age)22')).toBe('22');
  });
});
