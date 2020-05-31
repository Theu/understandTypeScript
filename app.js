// in this situation is better to let TS to infer the types of the props
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // this a TULPE a special type with knoweledge of types and legth
// } = {
//   name: "Matteo",
//   age: 38,
//   hobbies: ["Sports", "Coocking"],
//   role: [2, "author"], // (property) role: (string | number)[] --> this is call union type (type | type)
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// behind the hood --> ADMIN = 0, READ_ONLY = 1, AUTHOR = 2. I JS is rebuilt with a iif. I could also do the following
// enum Role {
//     ADMIN = 5,
//     READ_ONLY,
//     AUTHOR
//   }  --> in this case would be ADMIN = 5, READ_ONLY = 6, AUTHOR = 7
var person = {
    name: "Matteo",
    age: 38,
    hobbies: ["Sports", "Coocking"],
    // role: [2, "author"], // (property) role: (string | number)[] --> this is call union type (type | type)
    role: Role.ADMIN
};
// person.role.push("admin"); // we can push beause of push is allowed on array
// we cannot do person.role = [] because TS recognises length
// person.role[1] = 42;
// this is legit to TS because it only knows that role can have type of string OR number
console.log(person);
// let favoriteActivities: (string | number)[];
// favoriteActivities = ['Sports', 1]
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
    // console.log(hobby.map()); this give ERROR, TS knows that we don't have .map() on strings
}
if (person.role === Role.ADMIN) {
    console.log("administrate this stuck...");
}
