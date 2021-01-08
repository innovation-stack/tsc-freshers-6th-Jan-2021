// An array with two values = tuple
type Point2D = [number, number];
const point: Point2D = [10, 20];

// arr: [10, 20] -> index = 0, 1

interface IPoint2D {
  [index: number]: number;
}

const point2: IPoint2D = [100, 200];
const point3: IPoint2D = {
  0: 300,
  1: 400,
};

const person = {
  name: 'ANup',
  age: 20,
};

type ListOfStrings = string[];
const fruits: ListOfStrings = ['apple', 'mango'];

console.log(point);
console.log(fruits);
console.log(point2);
console.log(point3);

export default null;
