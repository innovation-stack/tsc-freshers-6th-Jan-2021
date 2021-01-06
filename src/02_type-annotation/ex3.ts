function sum(x: number, y: number): number {
  return x + y;
}

function arith(
  no1: number,
  no2: number,
  func: (a: number, b: number) => number
) {
  if (typeof func === 'function') {
    return func(no1, no2);
  }
}

console.log('result: ', arith(100, 200, sum));
// console.log('result: ', arith(100, 200, 'hello'));

export default null;
