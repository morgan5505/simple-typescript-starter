import { DataError } from './consts/dataError';

export const handleCityState = (
  cityState: string,
): { city: string; state: string } => {
  try {
    if (!cityState) {
      throw new Error();
    }
    const parsedCityState = cityState.replace('(City)', '');
    const [city, state] = parsedCityState.replace(' ', '').split(',');
    return { city, state };
  } catch (error) {
    throw new Error(DataError);
  }
};
