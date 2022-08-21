import { getMedian } from '../exercise4';

const array1 = [1, 3, 15, 20];
const array2 = [2, 3, 4, 13, 16];

test('execise4 test1', () => {
  expect(getMedian(array1, array2)).toBe(4);
});

test('execise4 test2', () => {
  expect(getMedian([], [])).toBe(0);
});