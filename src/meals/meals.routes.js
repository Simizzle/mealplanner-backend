const { Router } = require('express');
const mealRouter = Router();
const { createMeal, findMeal, findDate, deleteMeal,
    //  updateMeal 
    } = require('./meals.controllers');

mealRouter.post('/meals', createMeal);
mealRouter.get('/meals/:date', findMeal);
mealRouter.get('/meals', findDate);
mealRouter.delete('/meals/:_id', deleteMeal);
// mealRouter.put('/meals/', updateMeal);

module.exports = mealRouter;