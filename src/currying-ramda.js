const R = require('ramda');

// original greet
function greet(greeting) {
  return name => `${greeting} ${name}`;
}

console.log(greet('Hello')('James'));

// with ramda
const newGreet = R.curry((greeting, name) => `${greeting} ${name}`);

console.log(newGreet('Hello')('Mary'));
console.log(newGreet('Hello', 'James'));
