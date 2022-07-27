"use strict";
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // this type is called Tuple
// } = {
//     name: 'Max',
//     age: 30,
//     hobbies: ['fishing', 'cooking'],
//     role: [2, 'admin']
// }
// console.log(person)
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
let combineValues; // This is a function type which tells TS to take only this kind of function.
combineValues = add;
//combineValues = printResult;
addAndHandle(5, 8, (result) => {
    console.log('cb result: ', result);
});
