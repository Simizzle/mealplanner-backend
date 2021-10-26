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
        const user = req.params.user;
        const targetMeal = await Meals.find(
            {user: user, date: date}
            );
        res.status(200).send({ targetMeal })
    } catch (error) {
        res.status(500).send(error);
    }
};  
exports.findMealTable = async (req, res) => {
    try {
        const user = req.params.user;
        const targetMeal = await Meals.find(
            {user: user}
            );
        res.status(200).send({ targetMeal })
    } catch (error) {
        res.status(500).send(error);
    }
};  
exports.findDate = async (req, res) => {
    try {
        // const date = req.params.date;
        const targetMeal = await Meals.find(
            { }
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
            res.status(200).send({ 
                // user: deletedMeal, message: "Meal deleted" 
            })
    } catch (error) {
        res.staus(500).send(error);
    }  
};

exports.updateMeal = async (req, res) => {
    try {
        const favourite = req.body.favourite;
        const meal = req.params._id;
        const mealUpdate = await Meals.updateOne({_id: meal},
        {favourite: favourite}
         );
        res.status(200).send({ meal: mealUpdate})
    } catch (error) {
        res.status(500).send(error)
    }
};