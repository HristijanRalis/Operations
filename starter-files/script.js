// SCRIPT

// ====================================
// + , - , / , * , /
const a = 9,
  b = 6;

// +
let sum = a + b;
// -
let sub = a - b;
// '*'
let mul = a * b;
// '/'
let div = a / b;

console.log("Sum: ", sum);
console.log("Subtraction: ", sub);
console.log("Multiply: ", mul);
console.log("Division", div);
// ======================================

// Operators with conditions

function calculations(a, b, operator) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return a / b;
}

console.log("Sum:", calculations(2, 4, "+"));
console.log("Subtraction:", calculations(7, 4, "-"));
console.log("Multiply:", calculations(2, 4, "*"));
console.log("Division", calculations(2, 4, "/"));
