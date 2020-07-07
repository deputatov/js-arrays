import { getTheNearestLocation } from '../src/location.js';

test('getTheNearestLocation', () => {
  const locations = [
    ['Park', [10, 5]],
    ['Sea', [1, 3]],
    ['Museum', [8, 4]],
  ];

  const currentPoint = [5, 5];

  const result = getTheNearestLocation([], currentPoint);
  expect(result).toBeNull();

  const result2 = getTheNearestLocation(locations, currentPoint);
  expect(result2).toEqual(locations[2]);

  const currentPoint2 = [1, 3];

  const result3 = getTheNearestLocation(locations, currentPoint2);
  expect(result3).toEqual(locations[1]);
});
