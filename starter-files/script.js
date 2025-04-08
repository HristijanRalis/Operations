// SCRIPT
// Comparison Operations

function comparison(a, b) {
  if (a < b) {
    return `${a} is smaller then ${b}`;
  } else if (a > b) {
    return `${a} is greater then ${b}`;
  } else if (a === b) {
    return `${a} is equal with ${b}`;
  }
}

console.log(comparison(2, 3));
console.log(comparison(5, 3));
console.log(comparison(3, 3));
