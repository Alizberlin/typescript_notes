let age: number = 20;
if(age < 50)
age +=10;
console.log(age);

// enum **************
// list of related constants

// PascalCase convention for constants, first letter of each word is capitalized

const enum Size{ Small = 1, Medium = 2 , Large = 3 }; // OR enum Size = { Small = 's', Medium = 'm' , Large = 'l' };
//if you initialize the enum with const, the compiler will generate more readable code
let mySize: Size = Size.Small;
console.log(mySize, 'mySize');

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

// fucntions
// noUnusedparameters is the related setting.
// noimplicitreturns is naother setting.
// nounusedlocals is another setting.
function calculateTax(income: number, taxYear: number): number {
    let x;
    if(income > 50_000) {
        return income * 1.2;
    }
    return income
}

// Objects

let employee: {readonly id: number, name: string, age?: number, retire: (date: Date) => void} = { // readonly is a property cannot be changed
    id: 1,
    name: 'John',
    age: 25,
    retire: (date: Date) => {console.log(date)}
}


// type Aliases

type Employee = {readonly id: number, name: string, age?: number, retire: (date: Date) => void}

let employee1: Employee = {
    id: 1,
    name: 'John',
    age: 25,
    retire: (date: Date) => {console.log(date)}
}



//union types

function kgToLbs(weight: number | string): number {
    weight.toString()
    // Narrowing
    if( typeof weight === 'number') {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
    
}
kgToLbs(10);
kgToLbs('10');


// intersection types

type Draggable = {
    drag (): void;
}
type Resizable = {
    resize: () => void
}
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}


// literal types

type Quantity = 50 | 100;
let quantity: Quantity = 50;


// Nullable types##############
// strictNullChecks is the related setting.

function greet(name: string | null | undefined) {
    if(name)
    console.log(name.toLowerCase())
    else
    console.log('Hola')
}

//greet(null)


type Customer = {
    birthday: Date;
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);
// Optional property access operator
console.log(customer?.birthday)

// optional element access operator
// customer?.[0]

// optional call
let log: any = null
log?.('a')
