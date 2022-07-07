console.log('hello');
async function hello() {
    return 'world';
}
const url = new URL('https://example.com');
let lucky = 23;
lucky = '23';
let font;
const person1 = {
    firstName: 'Max',
    lastName: 'Smith',
};
const person2 = {
    firstName: 'Max',
    lastName: 'Smith',
    // age: 30,
};
const person3 = {
    first: 'Max',
    last: 'Smith',
    age: 30,
};
// functions
function pow(x, y) {
    return Math.pow(x, y).toString();
}
// if function does not return anything, you can use void
function poo(x, y) {
    Math.pow(x, y).toString();
}
const arr = [];
arr.push(1);
arr.push('one');
arr.push(false);
arr.push([2, 3, 4]);
arr.push({ a: 1, b: 2 });
export {};
