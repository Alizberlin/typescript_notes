# course website
https://www.typescript-training.com/course/fundamentals-v3

# variable and delarations

## explicit declaration
let and const are the declarations names
variable are "born" with their types.

with const your variable is stick to whatever your assign it to e.g

let age = 6 // this can be assigned any other number
but with const age = 6 // now age is always be 6 you cannot change it.
this is called 'literal type'

## Implicit declaration

you can declare a variable without assigning it a value , it will get a type of 'any' , implicit

# Objects
objects are defined by 
- name // key
- types // value and type

optional values can be state with ?, which means this value can or cannot be 

if you assign something a type of undefined, than you have to produce this undefined variable at the end, you cannot leave the place empty thinking this variable is undefined.

## Excess property checking

number of given object keys should be same everywhere


# Array Types


## Tuples

we need to state explicitly what type of values do we want on what position in an array/tuple, as well as the number of elements in a tuple.

let myCar: [number, string, string] = [2002, 'Honda', 'Corolla']

# Union and Intersection Types

union type is like logical operator OR |, pipe operator in typescript
where as Intersection types are only the intersections logical operator AND &

# Aliases

## type aliases 
- define a more meaningful name for this type
- declare the particulars of the type in a single place
- import and export this type from modules, the same as if it were an exported value

# Functions

## callable types 

