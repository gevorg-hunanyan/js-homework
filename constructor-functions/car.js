'use strict'

function Car(model, mpg) {
    this.model = model;
    this.milesPerGallon = mpg;
    tank = 0;
    odometer = 0;
}

Car.prototype.fill = function(gallons) {
    tank += gallons;
}

Car.prototype.drive = function(distance) {
    if (this.tank * this.milesPerGallon < distance) {
        odometer += this.tank * this.milesPerGallon;
        tank = 0;
        return `I ran out of fuel at ${this.odometer} miles.`;
    }
    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;
}
