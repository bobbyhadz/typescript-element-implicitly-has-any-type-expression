export {};

// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type

// EXAMPLE 1 - Solve the error using a type assertion

const str = 'name' as string;

const obj = {
  name: 'Bobby Hadz',
  country: 'Chile',
};

// 👇️ "Bobby Hadz"
console.log(obj[str as keyof typeof obj]);

// 👇️ type T = "name" | "country"
type T = keyof typeof obj;

// ---------------------------------------------------

// // EXAMPLE 2 - When working with a Type directly

// const str = 'name' as string;

// interface Person {
//   name: string;
//   country: string;
// }

// const obj: Person = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// console.log(obj[str as keyof Person]); // 👉️ "Bobby Hadz"

// // 👇️ type T = "name" | "country"
// type T = keyof Person;

// ---------------------------------------------------

// // EXAMPLE 3 - Typing the variable to solve the error

// interface Person {
//   name: string;
//   country: string;
// }

// // 👇️ this will only ever be one of object's keys
// const str: keyof Person = 'name';

// const obj: Person = {
//   name: 'Bobby Hadz',
//   country: 'Chile',
// };

// console.log(obj[str]); // 👉️ "Bobby Hadz"

// ---------------------------------------------------

// // Element implicitly has 'any' type because index expression is not of type 'number'

// // EXAMPLE 4 - Accessing an array at an index

// const arr = ['a', 'b', 'c'];

// const result = arr[0];
// console.log(result); // 👉️ "a"

// ---------------------------------------------------

// // EXAMPLE 5 - Use an object with an index signature to store key-value pairs

// type Person = {
//   [key: string]: any;
// };

// const obj: Person = {
//   name: 'Bobby Hadz',
// };

// obj.age = 30;
// obj.salary = 100;
// obj.tasks = ['develop', 'test'];

// console.log(obj['age']); // 👉️ 30
// console.log(obj['salary']); // 👉️ 100
