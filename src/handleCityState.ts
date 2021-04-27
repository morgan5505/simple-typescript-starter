export const handleCityState = (
  cityState: string,
): { city: string; state: string } => {
  const parsedCityState = cityState.replace('(City)', '');
  const [city, state] = parsedCityState.split(',');
  return { city, state };
};
