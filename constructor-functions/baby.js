'use strict'

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.compareAge = function(person2) {
    if (this.age > person2.age) return `${person2.name} is younger than me.`;
    if (this.age < person2.age) return `${person2.name} is older than me.`;
    return `${person2.name} is the same age as me.`;
}

function Baby(name, age, favoriteToy) {
    Person.call(this, name, age);
    this.favoriteToy = favoriteToy;
}

Baby.prototype = new Person();

Baby.prototype.play = function() {
    return `Playing with ${this.favoriteToy}.`;
}
