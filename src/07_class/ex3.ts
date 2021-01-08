class Edible {
  //
  constructor(public name: string, public color: string) {
    //
  }
}

class Fruit extends Edible {
  //
  constructor(name: string, color: string, public sweetness: number) {
    super(name, color);
    //
  }
}

class Vegetable extends Edible {
  constructor(name: string, color: string, public hasSeeds: boolean) {
    super(name, color);
  }
}

const fruit = new Fruit('apple', 'red', 80);
const veggie = new Vegetable('tomato', 'red', false);

console.log(fruit);
console.log(veggie);

export default null;
