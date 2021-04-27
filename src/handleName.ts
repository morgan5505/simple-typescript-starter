import { DataError } from './consts/dataError';

export const handleName = (name: string): string => {
  try {
    const parsedName = name.replace('(Name)', '');
    return parsedName;
  } catch (error) {
    throw new Error(DataError);
  }
};
