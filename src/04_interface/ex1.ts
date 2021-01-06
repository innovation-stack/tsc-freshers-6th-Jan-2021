// interface: describes a named definition of a shape of any object
// reuse type definition

interface Vehicle {
  wheels: number;
  color: string;
}

const car: Vehicle = { wheels: 4, color: 'black' };
const motorcycle: Vehicle = { wheels: 2, color: 'gray' };

console.log(car);
console.log(motorcycle);

export default null;
