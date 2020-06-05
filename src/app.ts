// Code goes here!

const userName = "Matteo";
// userName = 'Pingu'

// let age = 38;
// age = 39;

const hobbies = ["learning", "cooking"];
const person = {
  firstName: "Matteo",
  age: 38,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) =>
  numbers.reduce((accumulator, currVal) => accumulator + currVal, 0);

const addNumbers = add(1, 2, 3, 4, 5, 6);
console.log("addNumbers :>> ", addNumbers);

const [hobby1, hobby2] = hobbies;
const { firstName, age } = person;

const tester = [
  [1, 2],
  [3, 4],
];

const [test4, test5] = tester;

const [test1, test2] = [test4, test5].map(item => {

    console.log('item :>> ', item);
    return [...item, 1];});
console.log('test1 :>> ', test1);
console.log('test2 :>> ', test2);


