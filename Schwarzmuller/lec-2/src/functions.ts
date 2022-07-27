
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


function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result)
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // This is a function type which tells TS to take only this kind of function.

combineValues = add;
//combineValues = printResult;

addAndHandle(5, 8, (result) => {
    console.log('cb result: ', result)
})
