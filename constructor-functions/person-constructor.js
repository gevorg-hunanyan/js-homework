'use strict'

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
}

Person.prototype.eat = function(food) {
    if (stomach.length < 10) {
        this.stomach.push(food);
    }
}

Person.prototype.poop = function() {
    this.stomach.length = 0;
}

Person.prototype.toString = function() {
    return `${this.name}, ${this.age}`;
}
