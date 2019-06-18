// Simple reduce example

const numbers = [1, 2, 3];

function sum(x, y) {
  return x + y;
}

const total = numbers.reduce(sum);

console.log.og(total);

// Average grades

const grades = [60, 55, 80, 90, 99, 92, 75, 72];

const avgGrade = grades.reduce(sum) / grades.length;

console.log(avgGrade);
