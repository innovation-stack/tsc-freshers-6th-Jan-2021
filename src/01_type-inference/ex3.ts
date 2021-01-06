function print() {
  console.log('hello world');
}

function sum(x: number, y: number) {
  return x + y;
}

let output = print();

console.log('output: ', output);
console.log('sum: ', sum(10, 20));

export default null;
