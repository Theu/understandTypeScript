// in this situation is better to let TS to infer the types of the props
var person = {
    name: "Matteo",
    age: 38,
    hobbies: ["Sports", "Coocking"],
    role: [2, "author"]
};
person.role.push("admin");
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
