"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = exports.sum = exports.Person = exports.person = void 0;
exports.person = {
    name: 'Anup',
    age: 20,
};
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
    }
    return Person;
}());
exports.Person = Person;
function sum(x, y) {
    return x + y;
}
exports.sum = sum;
function sayHi() {
    console.log('Hello!!!!');
}
exports.sayHello = sayHi;
// const x = 10;
// export default x;
function func() {
    console.log('default func called');
}
exports.default = func;
