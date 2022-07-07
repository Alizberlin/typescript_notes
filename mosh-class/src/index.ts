let age: number = 20;
if(age < 50)
age +=10;
console.log(age);

// enum **************
// list of related constants

// PascalCase convention for constants, first letter of each word is capitalized

const enum Size{ Small = 1, Medium = 2 , Large = 3 }; // OR enum Size = { Small = 's', Medium = 'm' , Large = 'l' };

let mySize: Size = Size.Small;
console.log(mySize);

let sales: number = 1234567;

function render(document: any) {
    console.log(document);
}

// Arrays

let numbers: number[] = [1,2,3]
let numbers1: number[] = [1,2,3]

// Tuples
// is a fixed length array

let user: [number, string, boolean, number] = [1, 'John', true, 0];
user[0]
user[1]


