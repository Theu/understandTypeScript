interface Fruit {
  nameFruit: string,
  quantity: number
}

interface Creamer {
  nameCreamer: string,
  isVegan: boolean
}

// INTERSECTION can be achieved using interfaces --> interfa3 extends interface2, interface3 {}
// IGOR: I know that in this object I can pass a type declaration that doesnt belong to the interfaces I am intersecting.
// is this a good practice or I should create another interface?
interface IceCream extends Fruit, Creamer {
  alcolic: boolean
}

const fruityDessert: IceCream = {
  nameFruit: 'Banana',
  quantity: 2,
  nameCreamer: 'Almand milk',
  isVegan: true,
  alcolic: false
}

type Person = {
  name: string,
  interest: string[],
}

type Candidate = {
  id: number,
  role: string
}

// INTERSECTION can be achieved using types --> type3 = type1 & type2
type Employee = Person & Candidate;

const developer: Employee = {
  name: 'Matteo',
  interest: ['web-development', 'frontend'],
  id: 176761,
  role: 'frontend'
}

// and also HERE NOTE: it takes what is in common!!!
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
const tester: Universal = 42

// typeGuard combining TS and js typeof
function add(a: Combinable, b: Combinable) {
  // return a + b; can't work

  // this is a typeGuard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }

  // here it works because now TS knows that here we have ONLY numbers, the previuos condition matching string
  return a + b;
}

// type Person = {
//   name: string,
//   interest: string[],
// }

// type Candidate = {
//   id: number,
//   role: string
// }

type UnknownEmployee = Person | Candidate;
// const developer: Employee = {
//   name: 'Matteo',
//   interest: ['web-development', 'frontend'],
//   id: 176761,
//   role: 'frontend'
// }

// TYPE GUARD with type
const printEmployee = (emp: UnknownEmployee) => {
  // console.log(emp.name); // can't work because my type is INTERSECTION
  if ('name' in emp) {
    console.log(emp.name);
  }
}

// I do not know the structure of the object I will receive but I DO KNOW the types composing it
interface ErrorContainer {
  [prop: string]: string | number;
}

const ErrorBag: ErrorContainer = {
  code: 404,
  notFoundMessage: 'Page not found',
  email: 'not a valid email'
}