
// Есть три асинхронных запроса, каждый возвращает число. Вернуть из функции getSum() сумму этих чисел.

function request1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  })
}

function request2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(5);
    }, 1500);
  })
}

function request3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  })
}

export function getSum(): Promise<number> {
  let sum = 0;
  request1();
  request2();
  request3();

  return sum;
}
