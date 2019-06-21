// two to one arg
function greet(greeting) {
  return name => `${greeting} ${name}`;
}

console.log(greet('Hello')('Lars'));

const friends = ['Tom', 'Dick', 'Harry', 'Alistair'];

const friendGreetings = friends.map(greet('Good morning'));

console.log(friendGreetings);
