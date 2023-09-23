'use strict'

class Jungle {
    tigers = [];
    monkeys = [];
    snakes = [];
    fish = [];
    grain = [];
    meat = [];

    animals = [this.tigers, this.monkeys, this.snakes];
    food = [this.fish, this.grain, this.meat];

    soundOff() {
        let energyLevels = [];
        this.animals.forEach(species => {
            species.forEach(animal => {
                animal.makeSound;
                energyLevels.push(animal.getEnergy());
            });
        });
        return energyLevels;
    }
}

class Animal {
    _energy = 100;
    makeSound() {
        this.energy -= 3;
    }

    eatFood(food) {
        this.energy += 5;
    }

    sleep() {
        this.energy += 10;
    }

    get energy() {
        return this._energy;
    }
}

class Food {

}

class Tiger extends Animal {
    sleep() {
        this.energy += 5;
    }
    eatFood(food) {
        if (food instanceof Grain) {
            return 'I can\'t eat that';
        }
        this.energy += 5;
    }
}

class Monkey extends Animal {
    makeSound() {
        this.energy -= 4;
    }
    eatFood() {
        this.energy += 2;
    }
    play() {
        if (this.energy >= 8) {
            this.energy -= 8;
            return 'Oooo Oooo';
        }
        return 'I\'m too tired';
    }
}

class Snake extends Animal {

}

class Fish extends Food {

}

class Grain extends Food {

}

class Meat extends Food {

}
