const { Router } = require('express');
const mealRouter = Router();
const { createMeal, findMeal, deleteMeal,
    //  updateMeal 
    } = require('./meals.controllers');

mealRouter.post('/meals', createMeal);
mealRouter.get('/meals/:date', findMeal);
mealRouter.delete('/meals/:_id', deleteMeal);
// mealRouter.put('/meals/', updateMeal);

module.exports = mealRouter;