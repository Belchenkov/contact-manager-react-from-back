// Const & Let
/*
let name = 'John';
name = 'Jack';

const person = {
    name: 'John',
    age: 12
};

person.name = 'Jack';
console.log(person.name);
*/

// ARROW FUNCTIONS
/*
function sayHello() {
    console.log('Hello');
}

const sayHello = name => {
    console.log('Hello ' + name);
};

sayHello('Brad');
*/

// FOREACH
/*const fruits = ['Apples', 'Oranges', 'Grapes'];

fruits.forEach((fruit, index) => {
    console.log((index+1) + ':', fruit);
});*/

// MAP
/*
const fruits = ['Apples', 'Oranges', 'Grapes'];

const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(singleFruit);*/

// FILTER
/*
const people = [
    {id: 1, name: 'Paul'},
    {id: 2, name: 'Bob'},
    {id: 3, name: 'Sara'}
];

const people2 = people.filter(person => person.id !== 2);

console.log(people2);*/

// SPREAD
/*const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !==2)];
const person1 = {
    name: 'Brad',
    age: 36
};

const person2 = {
    ...person1,
    email: 'u608110@gmail.com'
};

console.log(arr3);*/

// DESTRUCTURING
/*
const profile = {
    name: 'John Doe',
    address: {
        street: '40 Main st',
        city: 'Boston'
    },
    hobbies: ['movies', 'music']
};
const { name, address, hobbies } = profile;
const { street, city } = profile.address;
//console.log(name, address, hobbies);
console.log(street, city);*/

// CLASSES
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age}`;
    }
}

/*const person1 = new Person('Fred', 12);
const person2 = new Person('Sara', 33);

console.log(person1.greet());*/

// SUBCLASSES
/*
class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age);
        this.balance = balance;
    }

    info() {
        return `${this.name} owes $${this.balance}.00`;
    }
}

const customer1 = new Customer('Kevin', 32, 300);

console.log(customer1.info());
*/

// MODULES
/*

// file 1 (file.js)
export const name = 'Jeff';
export const nums = [1,2,3];
export default Person;

// file 2 (file2.js)
import { name, nums } from './file1';
import Person from './file1';
*/





