type Fruit = {
  name: string;
  color: string;
  sweetness?: number;
};

type Vegetable = {
  name: string;
  color?: number;
};

type Edible = Fruit & Vegetable;

// const apple: Edible = {
//   name: 'Apple',
// };

export default null;
