import { Perfomance } from '../exercise10';

class Calculator {
  @Perfomance()
  calc() {
    let  sum = 0;

    for (let i = 0; i < 10000; i++) {
      for (let n = 0; n < 10000; n++) {
        sum = sum + n;
      }
    }

    return sum;
  }
}

test('execise10 test1', () => {
  console.log = jest.fn();

  const calculator = new Calculator();
  const sum = calculator.calc();

  expect(sum).toEqual(499950000000);

  expect((console.log as any).mock.calls[0][0]).toEqual(expect.stringContaining('milliseconds'));
});