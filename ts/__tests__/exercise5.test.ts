import { createAnagramArray } from '../exercise5';

const array = [
  'ватерполистка',
  'кильватер',
  'апельсин',
  'австралопитек',
  'стрелка',
  'вертикаль',
  'кластер',
  'спаниель',
  'сталкер',
  'корабль'
];


test('execise5 test1', () => {
  expect(createAnagramArray(array)).toStrictEqual([["ватерполистка", "австралопитек"], ["кильватер", "вертикаль"], ["апельсин", "спаниель"], ["стрелка", "кластер"], ["стрелка", "сталкер"], ["кластер", "сталкер"]]);
});


test('execise5 test1', () => {
  expect(createAnagramArray([])).toStrictEqual([]);
});