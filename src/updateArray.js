// Updating arrays
const meals = [
  { id: 1, description: 'Breakfast', calories: 420 },
  { id: 2, description: 'Lunch', calories: 520 },
  { id: 3, description: 'Snack', calories: 100 },
];

function updateDescription(meal) {
  if (meal.id === 2) {
    return {
      ...meal,
      description: 'Early lunch',
    };
  }

  return meal;
}

const updatedMealDescription = meals.map(updateDescription);

console.log(updatedMealDescription);

const filteredMeals = meals.filter(meal => meal.id !== 1);

console.log(filteredMeals);
