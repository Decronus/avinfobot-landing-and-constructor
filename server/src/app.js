const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const pagesRouter = require('./routes/pages');
const authRouter = require('./routes/auth');
const mongoose = require('mongoose');
const loggerUrl = require('./middlewares/loggerUrl');

dotenv.config();

const app = express();
app.use(cors());

const { PORT, MONGO_URL } = process.env;

mongoose
    .set('strictQuery', false)
    .connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use(loggerUrl);
app.use(pagesRouter);
app.use(authRouter);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is listening on PORT ${PORT}`);
});
