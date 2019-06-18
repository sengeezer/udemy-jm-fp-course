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

function groupByGrade(acc, grade) {
  let {
    a = 0,
    b = 0,
    c = 0,
    d = 0,
    f = 0,
  } = acc;

  if (grade >= 90) {
    return { ...acc, a: a++ };
  }

  if (grade >= 80) {
    return { ...acc, b: b++ };
  }

  if (grade >= 70) {
    return { ...acc, c: c++ };
  }

  if (grade >= 60) {
    return { ...acc, d: d++ };
  }

  if (grade < 60) {
    return { ...acc, f: f++ };
  }
}

const letterGradeCount = grades.reduce(groupByGrade, {});

console.log(letterGradeCount);
