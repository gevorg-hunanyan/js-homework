'use strict'

class Account {
    static count = 0;
    #id;
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.#id = count;
        count++;
    }
    get balance() {
        return this.balance;
    }
    set balance(newValue) {
        this.balance = newValue;
    }
    credit(value) {
        this.balance += value;
    }
    debit(value) {
        this.balance -= value;
    }
    transferTo(name, amount) {
        this.debit(amount);
        name.credit(amount);
    }
}
