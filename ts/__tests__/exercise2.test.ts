import { getIds, groupBy, GroupUsers, User } from '../exercise2';

const users: User[] = [
  { id: 1, name: '1', role: 'user' },
  { id: 2, name: '2', role: 'user' },
  { id: 2, name: '3', role: 'admin' },
  { id: 3, name: '4', role: 'admin' },
  { id: 4, name: '5', role: 'user' },
  { id: 4, name: '6', role: 'user' }
];

test('execise2 test1', () => {
  expect(getIds(users)).toMatchObject([1,2,3,4]);
})

test('execise2 test2', () => {
  const group: GroupUsers = {
    'user': [users[0], users[1], users[4], users[5]],
    'admin': [users[2], users[3]],
  };
  
  expect(groupBy(users, 'role')).toMatchObject(group);
})

test('execise2 test3', () => {
  const group: GroupUsers = {
    1: [users[0]],
    2: [users[1], users[2]],
    3: [users[3]],
    4: [users[4], users[5]],
  };

  expect(groupBy(users, 'id')).toMatchObject(group);
})