// Generics; allows you to "reuse" types/ transform types (mapped types, conditional types, infer types)

function getFirstItem<T>(list: T[]): T {
  return list[0];
}

console.log(getFirstItem([10, 20, 30]));
console.log(getFirstItem(['hello', 'world']));
console.log(getFirstItem([true, false]));

class Fruit {
  constructor(public name: string, public color: string) {}
}
const fruits = [
  new Fruit('apple', 'red'),
  new Fruit('mango', 'yellow'),
  new Fruit('banana', 'yellow'),
];
console.log(getFirstItem(fruits));

export default null;
