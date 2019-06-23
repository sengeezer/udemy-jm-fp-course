const R = require('ramda');

const sentence = 'Lorem ipsum dolor sit amet, as they said then and will say again until you can bring me a shrubbery.';

const wordList = R.split(' ', sentence);

console.log(wordList);

const wordCount = R.length(wordList);

console.log(wordCount);

// Could shorten to

const shorterCount = R.length(R.split(' ', wordList));

console.log(shorterCount);
