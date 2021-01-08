export const person = {
  name: 'Anup',
  age: 20,
};

export interface IPerson {
  name: string;
  age: number;
}

export class Person {
  constructor(public name: string, age: number) {}
}

function sum(x: number, y: number): number {
  return x + y;
}

function sayHi() {
  console.log('Hello!!!!');
}

// const x = 10;
// export default x;

export default function func() {
  console.log('default func called');
}

export { sum, sayHi as sayHello };
