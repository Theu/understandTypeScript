// in this situation is better to let TS to infer the types of the props

const person = {
    name: 'Matteo',
    age: 38,
    hobbies: ['Sports', 'Coocking']
}

// let favoriteActivities: (string | number)[];
// favoriteActivities = ['Sports', 1]

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
    // console.log(hobby.map()); this give ERROR, TS knows that we don't have .map() on strings
}