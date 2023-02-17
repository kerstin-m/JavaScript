/*const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 20";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20
*/

// TODO: Implement the oddEven function

function oddEven(number) {
  let result;
  if (number % 2 == 0) {
    result = "Even";
  } else {
    result = "odd";
  }
  return result;
}
console.log(oddEven(4));

console.log(oddEven(3));

console.log(oddEven(-1));

// TODO: Implement the oldYoung function
function oldYoung(age) {
  let result;
  if (age < 0) {
    result = "invalid parameter";
  } else if (age < 16) {
    result = "children";
  } else if (age < 50) {
    result = "young person";
  } else {
    result = "elder person";
  }
  return result;
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
