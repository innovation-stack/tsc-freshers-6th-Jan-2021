interface Fruit {
  name: string;
  color: string;
}

interface Vegetable {
  name: string;
  color: string;
}

interface Vehicle {
  name: string;
  color: string;
}

const fruits: Fruit[] = [];

function addToFruits(fruit: Fruit) {
  // a variable of type Fruit
  fruits.push(fruit);
}

const apple: Fruit = {
  name: 'Apple',
  color: 'yellow',
};

const tomato: Vegetable = {
  name: 'tomato',
  color: 'red',
};

const tesla: Vehicle = {
  name: 'Tesla',
  color: 'black',
};

// Structural types
// Nominal types

addToFruits(apple);
addToFruits(tomato); // a variable of type Vegetable
addToFruits(tesla);

export default null;
