import { handleCityState } from '../handleCityState';
import { DataError } from '../consts/dataError';

describe('handleCityState', () => {
  it('should fail if city is not given', () => {
    expect(handleCityState).toThrowError(DataError);
  });
  it('should return an city as an object', () => {
    expect(handleCityState('(City)Tampa')).toMatchObject({
      city: 'Tampa',
    });
  });
  it('should return an city AND state as a object', () => {
    expect(handleCityState('(City)Tampa,Florida')).toMatchObject({
      city: 'Tampa',
      state: 'Florida',
    });
  });
});
