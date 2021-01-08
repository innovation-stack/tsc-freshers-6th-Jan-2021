function flatten<T>(list: (T | T[])[]): T[] {
  const flattened: T[] = [];

  // for(let i = 0; i < list.length; i++)
  for (const element of list) {
    if (Array.isArray(element)) {
      // spread operator
      // [10, 20, 30] <-- [[20, 30]]
      flattened.push(...element);
    } else {
      flattened.push(element);
    }
  }
  return flattened;
}

const numbers = [1, [2, 3], [4, 5, 6], [7], 8, 9];
// [ number, number[], number[], number[], number, number ]

console.log(flatten(numbers));

export default null;
