/* eslint-disable import/no-extraneous-dependencies */
const R = require('ramda');
const h = require('hyperscript');
const tags = require('hyperscript-helpers')(h);
/* eslint-enable import/no-extraneous-dependencies */

const {
  td,
  th,
  tr,
  tbody,
} = tags;

const meals = [
  { description: 'Breakfast', calories: 460 },
  { description: 'Snack', calories: 180 },
  { description: 'Lunch', calories: 600 },
];

const cell = (tag, className, val) => tag({ className }, val);

const mealRow = (className, meal) => tr({ className }, [
  cell(td, 'pa2', meal.description),
  cell(td, 'pa2 tr', meal.calories),
]);

const mealsBody = (className, mealsArr) => {
  const rows = R.map(R.partial(mealRow, ['stripe-dark']), mealsArr);

  return tbody({ className }, rows);
};

console.log(mealsBody('', meals));
