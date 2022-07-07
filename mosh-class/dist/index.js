"use strict";
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
;
let mySize = 1;
console.log(mySize, 'mySize');
let sales = 1234567;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let numbers1 = [1, 2, 3];
let user = [1, 'John', true, 0];
user[0];
user[1];
function calculateTax(income, taxYear) {
    let x;
    if (income > 50000) {
        return income * 1.2;
    }
    return income;
}
let employee = {
    id: 1,
    name: 'John',
    age: 25,
    retire: (date) => { console.log(date); }
};
let employee1 = {
    id: 1,
    name: 'John',
    age: 25,
    retire: (date) => { console.log(date); }
};
function kgToLbs(weight) {
    weight.toString();
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log(name.toLowerCase());
    else
        console.log('Hola');
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer?.birthday);
let log = null;
log?.('a');
//# sourceMappingURL=index.js.map