function combine(input1, input2) {
    var result;
    // to deal with Operator '+' cannot be applied to types 'string | number' and 'string | number'. I can introduce a runtime check
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(38, 44);
console.log(combinedAges);
var combinedNames = combine("Pingu", "Conchis");
console.log(combinedNames);
