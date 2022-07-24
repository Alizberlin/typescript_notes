function add(n1: number, n2: number): number {
    return n1 + n2;
}

const number1 = 5;
const number2 = 10;

//console.log(add(number1, number2))

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // this type is called Tuple
} = {
    name: 'Max',
    age: 30,
    hobbies: ['fishing', 'cooking'],
    role: [2, 'admin']
}

console.log(person)