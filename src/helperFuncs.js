export const convertToFahrenheit = (celsius) =>
  ((celsius * 9) / 5 + 32).toString();

export const knotsToMPH = (knots) => knots * 1.151;

export const degreesToDirections = (degree) => {
  switch (degree) {
    case 210:
      return 'S/SW';
    case 190:
      return 'S';

    default:
      return 'direction unknown';
  }
};
