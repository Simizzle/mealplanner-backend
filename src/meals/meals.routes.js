const { Router } = require('express');
const mealRouter = Router();
const { createMeal, findMeal, deleteMeal,
    //  updateMeal 
    } = require('./meals.controllers');

mealRouter.post('/meals', createMeal);
mealRouter.get('/meals/:title', findMeal);
mealRouter.delete('/meals:title', deleteMeal);
// mealRouter.put('/meals/', updateMeal);

module.exports = mealRouter;