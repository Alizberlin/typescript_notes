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