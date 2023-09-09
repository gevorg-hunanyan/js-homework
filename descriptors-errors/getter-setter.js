'use strict'

const obj = {
    set name(value) {
        this._name = value.split(', ').map(item => [item, item.length]);
    },
    get name() {
        return this._name;
    },
};
