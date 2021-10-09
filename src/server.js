require('./db/connection');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const mealRouter = require('./meals/meals.routes');
const userRouter = require('./users/users.routes');

app.use(express.json());
app.use(cors());
app.use(mealRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
