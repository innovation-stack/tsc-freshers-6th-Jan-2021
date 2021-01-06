interface Edible {
  name: string;
  color: string;
}

interface Fruit extends Edible {
  sweetness: number;
}

interface Vegetable extends Edible {}

const fruits: Fruit[] = [];

function addToFruits(fruit: Fruit) {
  // a variable of type Fruit
  fruits.push(fruit);
}

const apple: Fruit = {
  name: 'Apple',
  color: 'yellow',
  sweetness: 20,
};

const tomato: Vegetable = {
  name: 'tomato',
  color: 'red',
};

addToFruits(apple);

// missing sweetness property from tomato
// addToFruits(tomato);

export default null;
