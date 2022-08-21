import { getRange } from '../exercise9';

test('execise9 test1', () => {
  const range = getRange(0, 100);

  expect(range.length).toBe(100);
})

test('execise9 test2', () => {
  const range = getRange(0, -100);

  expect(range).toEqual([]);
})

test('execise9 test3', () => {
  const range = getRange(-100, 1);

  expect(range).toEqual([-100]);
})
