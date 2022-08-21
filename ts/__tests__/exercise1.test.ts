import { User } from '../exercise1';

test('execise1 test1', () => {
  const user = new User('John', 'Due');

  expect(`User: ${user}`).toBe('User: John Due');
})

test('execise1 test2', () => {
  const user = new User('John', 'Due');

  expect(100 + Number(user)).toBe(101);
})