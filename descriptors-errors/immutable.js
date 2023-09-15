'use strict'

function Immutable(inputObj) {
    Object.assign(this, inputObj);
    Object.freeze(this);
}
