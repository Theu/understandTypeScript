type Combinable = number | string; // custom type or type alias
type ConversionDescriptor = "as-number" | "as-text" // custom type as literal

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  // to deal with Operator '+' cannot be applied to types 'string | number' and 'string | number'. I can introduce a runtime check
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(38, 44, "as-number");
console.log(combinedAges);

const combinedNames = combine("Pingu", "Conchis", "as-text");
console.log(combinedNames);
