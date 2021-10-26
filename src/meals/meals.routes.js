const { Router } = require('express');
const mealRouter = Router();
const { createMeal, findMeal, updateMeal, findDate, findMealTable, deleteMeal,
    //  updateMeal 
    } = require('./meals.controllers');

mealRouter.post('/meals', createMeal);
mealRouter.get('/meals/:date&:user', findMeal);
mealRouter.get('/meals/:user', findMealTable);
mealRouter.put('/meals/:_id', updateMeal)
mealRouter.get('/meals', findDate);
mealRouter.delete('/meals/:_id', deleteMeal);
// mealRouter.put('/meals/', updateMeal);

module.exports = mealRouter;