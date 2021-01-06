// any: is the least restrictive type

let str: any = 'hello';

// TS doesn't throws error.
console.log(str.toUpperCase());

// "typeof" type guard / type narrowing
if (typeof str === 'string') {
  console.log(str.toUpperCase());
}

export default null;
