import { DataError } from './consts/dataError';

export const handleFlags = (
  flags: string,
): {
  gender: string;
  employee: string;
  student: string;
} => {
  try {
    const parsedFlags = flags.replace('(Flags)', '').split('');
    if (parsedFlags.length !== 3) {
      throw new Error();
    }
    const gender = parsedFlags[0] === 'Y' ? 'Female' : 'Male';
    const isStudent = parsedFlags[1] === 'Y' ? 'Yes' : 'No';
    const isEmployee = parsedFlags[2] === 'Y' ? 'Yes' : 'No';
    return { gender, employee: isEmployee, student: isStudent };
  } catch (error) {
    throw new Error(DataError);
  }
};
