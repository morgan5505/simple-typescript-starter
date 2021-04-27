export const handleName = (name: string): string => {
  const parsedName = name.replace('(Name)', '');
  return parsedName;
};
