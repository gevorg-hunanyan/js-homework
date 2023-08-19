'use strict'

function createPerson(name, age) {
    let nameProperty = name;
    let ageProperty = age;
    return {
        getName() { return nameProperty },
        setName(newName) { nameProperty = newName },
        getAge() { return ageProperty },
        setAge(newAge) { ageProperty = newAge },
    }
}
