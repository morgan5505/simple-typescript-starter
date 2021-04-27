import * as fs from 'fs';
export const readInputFile = () => {
  try {
    const data = fs.readFileSync('SampleInputFile.txt', 'utf8');
    //strip out carriage return from file reading
    return data.replace(/\r/g, '');
  } catch (e) {
    console.log('Error:', e.stack);
  }
};
