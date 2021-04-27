import * as fs from 'fs';
import { DataError } from './consts/dataError';
export const readInputFile = (filePath: string): string => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    //strip out carriage return from file reading
    return data.replace(/\r/g, '');
  } catch (e) {
    throw new Error(DataError);
  }
};
