type TuplePoint = [number, number];

interface StringObjectPoint {
  x: string;
  y: string;
}

interface NumberObjectPoint {
  x: number;
  y: number;
}

type Point = TuplePoint | StringObjectPoint | NumberObjectPoint;

function processPoint(point: Point) {
  // type guard
  if (Array.isArray(point)) {
    return point[0] + point[1] + 10;
  } else {
    if (typeof point.x === 'string' && typeof point.y === 'string') {
      return parseInt(point.x, 10) + parseInt(point.y, 10) + 20;
    } else if (typeof point.x === 'number' && typeof point.y === 'number') {
      return point.x + point.y + 20;
    }
  }
}
console.log(processPoint([10, 20]));
console.log(processPoint({ x: '100', y: '200' }));
console.log(processPoint({ x: 100, y: 200 }));

export default null;
