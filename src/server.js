require('./db/connection');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const mealRouter = require('./meals/meals.routes');

app.use(express.json());
app.use(cors());
app.use(mealRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
