type Edible = {
  name: string;
  color: string;
};

type Fruit = {
  sweetness: number;
};

type Vegetable = {
  hasSeeds: boolean;
};

// intersection type
type EdibleFruit = Fruit & Edible;
type EdibleVegetable = Vegetable & Edible;

interface IEdibleFruit extends Fruit, Edible {}

interface IEdibleVegetable extends Vegetable, Edible {}

const apple: EdibleFruit = {
  name: 'apple',
  color: 'red',
  sweetness: 90,
};

const tomato: EdibleVegetable = {
  name: 'tomato',
  color: 'red',
  hasSeeds: false,
};

const yellowApple: IEdibleFruit = {
  name: 'apple',
  color: 'yellow',
  sweetness: 70,
};

const cucumber: IEdibleVegetable = {
  name: 'cucumber',
  color: 'green',
  hasSeeds: true,
};

console.log(apple);
console.log(tomato);

export default null;
