const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const pagesRouter = require('./routes/pages');
const mongoose = require('mongoose');
const addApiRoute = require('./middlewares/addApiRoute');
const loggerUrl = require('./middlewares/loggerUrl');

dotenv.config();

const app = express();
app.use(cors());

const { PORT, MONGO_URL } = process.env;

mongoose
    .set('strictQuery', false)
    .connect(MONGO_URL)
    .then((res) => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error));

app.use(bodyParser.json());
// app.use(addApiRoute);
app.use(loggerUrl);
app.use(usersRouter);
app.use(pagesRouter);

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is listening on PORT ${PORT}`);
});
