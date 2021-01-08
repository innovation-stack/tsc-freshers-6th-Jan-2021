type TuplePoint = [number, number];

// type ObjectPoint = {
//   x: number;
//   y: number;
// };

type Point = TuplePoint | ObjectPoint;

interface ObjectPoint {
  x: number;
  y: number;
}

function processPoint(point: Point) {
  // type guard
  if (Array.isArray(point)) {
    return point[0] + point[1] + 10;
  } else {
    return point.x + point.y + 20;
  }
}

console.log(processPoint([10, 20]));
console.log(processPoint({ x: 100, y: 200 }));

export default null;
