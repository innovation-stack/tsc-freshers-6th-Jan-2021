"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m1_1 = require("./m1");
m1_1.default();
console.log('person object: ', m1_1.person);
var p = new m1_1.Person('Arun', 30);
console.log(p);
var newPerson = {
    name: 'test',
    age: 30,
};
console.log(newPerson);
console.log(m1_1.sum(10, 20));
m1_1.sayHello();
