import { getSum } from '../exercise6';

test('execise6 test1', async () => {
  getSum().then(sum => {
    expect(sum).toBe(17);
  });
})
