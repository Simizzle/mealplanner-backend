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
   imageUrl: {
       type: String,
   },
   title: {
       type: String,
   },
   date: {
       type: String,
   },
   user: {
       type: String,
   },
   favourite: {
       type: Boolean,
   }
});

const Meals = mongoose.model('Meals', mealsSchema);

module.exports = Meals;