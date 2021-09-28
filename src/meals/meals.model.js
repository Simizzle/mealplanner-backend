const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
   imageType: {
       type: String,
   },
   readyInMinutes: {
       type: Number,
   },
   servings: {
       type: Number,
   },
   sourceUrl: {
       type: String,
   },
   title: {
       type: String,
   },
   date: {
       type: String,
   }
});

const Meals = mongoose.model('Meals', mealsSchema);

module.exports = Meals;