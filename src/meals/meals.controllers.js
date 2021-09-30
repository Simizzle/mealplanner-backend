const Meals = require("./meals.model.js");

exports.createMeal = async (req, res) => {
  try {
    const meal = new Meals(req.body);
    const savedMeal = await meal.save();
    res
      .status(200)
      .send({ title: savedMeal, message: "Meal saved to database" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.findMeal = async (req, res) => {
    try {
        const date = req.params.date;
        const targetMeal = await Meals.find(
            { date: date }
            );
        res.status(200).send({ targetMeal })
    } catch (error) {
        res.status(500).send(error);
    }
};  


exports.deleteMeal = async (req, res) => {
    try {
        const meal = req.params._id;
            const deletedMeal = await Meals.findOneAndDelete({_id: meal});
            res.status(200).send({ user: deletedMeal, message: "Meal deleted" })
    } catch (error) {
        res.staus(500).send(error);
    }  
};

// exports.updateMeal = async (req, res) => {
//     try {
//         const meal = req.body.title;
//         const mealUpdate = await Movies.updateOne({title: title, watched: watched, rating: rating});
//         res.status(200).send({ meal: mealUpdate, message: "Movie updated"})
//     } catch (error) {
//         res.status(500).send(error)
//     }
// };