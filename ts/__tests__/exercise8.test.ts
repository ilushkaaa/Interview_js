import { filterUsers, User } from '../exercise8';

const users: User[] = [
  {
    id: 1,
    name: 'Иван',
    role: 'admin',
    age: 25
  },
  {
    id: 2,
    name: 'Петр',
    role: 'user',
    age: 35
  },
  {
    id: 3,
    name: 'Иван',
    role: 'admin',
    age: 45
  },
  {
    id: 4,
    name: 'Вася',
    role: 'user',
    age: 50
  },
  {
    id: 5,
    name: 'Петя',
    role: 'user',
    age: 60
  }
]

test('execise8 test1', () => {
  const filteredUsers = filterUsers([], {});

  expect(filteredUsers.length).toBe(0);
})

test('execise8 test2', () => {
  const filteredUsers = filterUsers(users, { role: 'admin' });

  expect(filteredUsers.length).toBe(2);
})

test('execise8 test3', () => {
  const filteredUsers = filterUsers(users, { name: 'Иван', age: 45 });

  expect(filteredUsers.length).toBe(1);
})

test('execise8 test4', () => {
  const filteredUsers = filterUsers(users, { id: 10, age: 55 });

  expect(filteredUsers.length).toBe(0);
})