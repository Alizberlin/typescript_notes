import * as lodash from 'lodash';

console.log('hello')

async function hello() {
    return 'world'
}

const url = new URL('https://example.com')

let lucky: any = 23;
lucky = '23'


type  Style = string;
let font: Style;

// objects

// to assign a type and shape of an object use interface

interface Person {
    firstName: string;
    lastName: string;
}

const person1: Person = {
    firstName: 'Max',
    lastName: 'Smith',
}

const person2: Person = {
    firstName: 'Max',
    lastName: 'Smith',
    // age: 30,
}

// or you can add a key with the type of any into your interface in order to allow for any properties


interface Person2 {
    first: string;
    last: string;
    [key: string]: any;
}

const person3: Person2 = {
    first: 'Max',
    last: 'Smith',
     age: 30,
}

// functions


function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}

// if function does not return anything, you can use void

function poo(x: number, y: number): void {
     Math.pow(x, y).toString();
}


// Arrays

// you can force an array to be of a certain type by using the generic type

//const arr: number[] = [];
//const arr: Person[] = [];
//const arr: string[] = [];

// or you can specify a type of an array by using the Array<T> generic type

//type MyList = [number, string, boolean];

// in this case you cannot start with an empty array, compiler will throw an error, it expects something to start with
// or you can put question mark in the array to allow for empty array

type MyList = [number?, string?, boolean?, any?];

const arr: MyList = [];


arr.push(1);
arr.push('one');
arr.push(false);
arr.push([2, 3, 4]);
arr.push({ a: 1, b: 2 });
