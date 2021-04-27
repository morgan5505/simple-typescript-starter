import { DataError } from '../consts/dataError';
import { outputFile } from '../index';
describe('test of output function', () => {
  it('should return the proper output for the given sample file', () => {
    console.log = jest.fn();
    outputFile('SampleInputFile.txt');
    expect(console.log).toHaveBeenCalledTimes(3);
  });
  it('should throw if an invalid file is given', () => {
    expect(() => {
      outputFile('noexist.txt');
    }).toThrowError(DataError);
  });
  it('should throw if an emptyfile is given', () => {
    expect(() => {
      outputFile('emptyfile.txt');
    }).toThrowError(DataError);
  });
});
