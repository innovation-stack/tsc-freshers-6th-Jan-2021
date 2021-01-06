// string literal
let message = 'Hello world';

// message = 10;

// number literal
let population = 1_234_567_890;

// boolean literal
let isValid = true;

// object literal
let todo = {
  id: 1,
  name: 'teach TypeScript',
  completed: false,
};

let fruits = ['apple', 'mango'];
let fruit = fruits[0];

let uppercasedFruits = fruits.map(function (fruit) {
  return fruit.toUpperCase();
});

console.log('all upcased fruits: ', uppercasedFruits);

// [5, 5]
let fruitsLength = fruits.map((fruit) => fruit.length);

console.log('lengths of fruits: ', fruitsLength);

export default null;
