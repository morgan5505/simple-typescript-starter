import { DataError } from './consts/dataError';

export const handleAge = (age: string): string => {
  try {
    const parsedAge = age.replace('(Age)', '');
    return parsedAge;
  } catch (error) {
    throw new Error(DataError);
  }
};
