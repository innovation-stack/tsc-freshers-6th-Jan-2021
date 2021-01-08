interface I1 {
  m1(): void;
}

interface I2 {
  m2(): void;
}

// type alias -> union of two interface
type T1 = I1 | I2;

// type alias -> intersection of two interfaces
type T2 = I1 & I2;

type Person = { name: string };

// an interface extends another interface
interface I3 extends I1 {}

// an interface extends another type alias
// interface I4 extends T1 {}

interface I5 extends T2 {}

// an interface extends plain type alias
interface I6 extends Person {}

// duplicate interfaces
interface IPerson {
  age: number;
}

interface IPerson {
  name: string;
}

const p: IPerson = {
  name: 'Anup',
  age: 20,
};

/*
// third party interface
interface JQuery {
  add(): string
  remove()
}

// created by the consumer
interface JQuery {
  add(): number
  addToDomConditionally();
}

const j: JQuery = {
  add(),
  remove(),
  addToDomConditionally()
}

*/

export default null;
