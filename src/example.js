// mutable variable, which means you can change it's value whenever
// let name = "Jimmy"; 

// Immutable variable, cannot change
// the idiomatic style of coding is to make all of your variables const, until
// you have to CHANGE the data in the variable, then make it let.
const otherName = "Wendy";


// basic scalar types
const thisString = "sup"; // string
const age = 32; // number (behind the scenes they are all f64 aka a double)
const isCool = true; // boolean

// reference types
const things = [1, 2, 3] // this is an array, arrays are just like List<thing> in C#

const person = {
    name: "Jimmy",
    age: 33 // the key is typically a string, the value of you "property" is whatever you want
} // this is an object, objects are just like Dictionary<string, thing> in C#
// or HashMaps, just key value pairs.
// HOWEVER, objects in javascript are FAR MORE FLEXIBLE than your c# dictionary or your hashmaps in c++.

// also objects are typically used as "class objects", which means the KEY of an object could
// contain a method.
const otherPerson = {
    name: "James",
    age: 33,
    toString: () => {
        return `${this.name} is ${this.age} years old`; // the "this" keyword refers to the object itself.
    }
}
// in javascript, functions are a TYPE of object


// logic in javascript
if (3 > 4){
    // just like C#
}

// javascript also has a switch statement, regular for loop, while loop, and do while loop
const otherThings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a for each loop in javascript is a for "of" loop
for (const x of otherThings) {
    console.log(x);
} // YOU WILL BE USING THIS LOOP THE MOST IF YOU NEED TO MUTATE THE DATA IN AN ARRAY

// not to be confused with a for "in" loop, which loops over the KEYS of an object
const obj = {
    name: "Jimmy",
    age: 33,
    height: 72
}

for (const lol in obj) { // if you for of over an array, your "keys" will just be the index value
    console.log(lol); // although this looks like a for of, a for in loops over the KEYS of an object
}



// People typically write their javascript code with collections with method chaining, similar to 
// how you would use LINQ in C#.


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map(x => x * 2) // (works EXACTLY like LINQs, Select() )this is a map, which is a function that takes a function as a parameter, it turns your parameter A into B
    .filter(x => x % 2 == 0) // (works EXACTLY like LINQs, Where() )this is a filter, which is a function that takes a function as a parameter, returns your value if it passes the function predicate


// cool javascript unique features / gatchas.
const objTwo = {
    name: "Jimmy",
    age: 33,
    job: {
        title: "Developer",
        salary: 145_000
    }
}

// not derencing from original object, it is COPYING the values, ie. making an immutable copy
const { name, age, job } = objTwo; // this is a destructuring assignment, which is a way to pull out data from an object, and assign it to a variable.
console.log(name); // "Jimmy"
console.log(age); // 33
console.log(job) // { title: 'Developer', salary: 145000 }

// still destructuring, just taking ONE property from the object
const { name } = objTwo;

console.log(objTwo);

const names = [ "James", "Ian", "Coco"];
const [ firstName, secondName ] = names;

console.log(firstName) // "James"
console.log(secondName) // "Ian"



// spread operator... spread them..... ;), this allows you to concatanate arrays.
// this creates a new array into memory
namesAgain = [...names, "Wendy", "Browny", "Anna"];
console.log(namesAgain) // [ "James", "Ian", "Coco", "Wendy", "Browny", "Anna"]

const finalObj = {
    name: "James",
    age: 33,
}

// spread operator over an object, it takes all the properties of an object, and puts them into a new object, then you can add even more properties if you want
// this creates a new object into memory
const actualFinalObj = {...finalObj, job: "Developer", toString: () => { return "hi"}};

// functions
// fat arrow function.. the most common way functions are written in modern javascript
const addTwoTwice = () => {
    const result = 2 + 2;
    return result;
    // we use the fat arrow function because the "This" keyword is not BOUND to the anything
}

addTwoTwice(); // 4

// valid function, this existed before the fat arrow, but you will see these occasionally
function addTwo() {
    const result = 2 + 2;
    return result;

    // default function will CHANGE the context of the "This" keyword
}

addTwo() // 4


// functions with parameters, parameter destructuring, it works EXACTLY like object destructuring
const fakeComponent = ({num, name, age}) => {
    console.log(num);
    console.log(name);
    console.log(age);
}

const exampleObject = {
    num: 1,
    name: "Ian",
    age: 30
}

fakeComponent(exampleObject);


const finalThings = [
    {
        id: 123,
        route: "/home",
    },
    {
        id: 345,
        route: "/index",
    },
    {
        id: 2356,
        route: "/landing",
    }
];

//            lambda just like in c#//             if you want to inline return an object, you HAVE to put parenthesis around the curly brackets
// otherwise, javascript thinks you are creating a function body
var finalFinalThings = finalThings.map(({id, route}) =>  ({ id, route, isCool: true}));

console.log(finalFinalThings)// [ { id: 123, route: '/home', isCool: true }, { id: 345, route: '/index', isCool: true }, { id: 2356, route: '/landing', isCool: true } ]