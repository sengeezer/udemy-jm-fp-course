const studentGrades = [
  { name: 'Joe', grade: 88 },
  { name: 'Jen', grade: 94 },
  { name: 'Steph', grade: 77 },
  { name: 'Allen', grade: 60 },
  { name: 'Gina', grade: 54 },
];

function convertGrade(grade) {
  if (grade >= 90) {
    return ['a', 'Excellent Job'];
  }

  if (grade >= 80) {
    return ['b', 'Nice Job'];
  }

  if (grade >= 70) {
    return ['c', 'Well done'];
  }

  if (grade >= 60) {
    return ['d', 'What happened'];
  }

  if (grade < 60) {
    return ['f', 'Not good'];
  }

  return ['u', 'Que?!'];
}

function message(converter) {
  return student => `${converter(student.grade)[1]} ${student.name}, you got an ${converter(student.grade)[0]}`;
}

const studentFeedback = studentGrades.map(message(convertGrade));

console.log(studentFeedback);
