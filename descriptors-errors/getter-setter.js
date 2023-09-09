'use strict'

const obj = {
    set name(value) {
        this._name = value.split(', ');
    },
    get name() {
        return [[this._name[0], this._name[0].length], [this._name[1], this._name[1].length]];
    },
};
