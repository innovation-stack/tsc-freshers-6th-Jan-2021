import fn, { person, Person, IPerson, sum, sayHello } from './m1';

fn();

console.log('person object: ', person);

const p = new Person('Arun', 30);
console.log(p);

const newPerson: IPerson = {
  name: 'test',
  age: 30,
};
console.log(newPerson);

console.log(sum(10, 20));
sayHello();
