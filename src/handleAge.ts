export const handleAge = (age: string): string => {
  const parsedAge = age.replace('(Age)', '');
  return parsedAge;
};
