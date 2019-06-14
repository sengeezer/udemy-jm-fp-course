// Updating an object immutably

const meal = {
  id: 1,
  description: 'snack',
};

const updatedMeal = {
  ...meal,
  calories: 600,
};

console.log(meal, updatedMeal);

// "deleting" a key / property
const { id, ...curatedMeal } = updatedMeal;

console.log(curatedMeal);
