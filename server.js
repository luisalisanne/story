const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors())

// ROUTES
const userInputRouter = require('./routes/userInputRoute');
app.use('/data', userInputRouter)

// CONNECT TO DATABASE
const {DB_USER, DB_PASS, DB_HOST, DB_NAME} = process.env;

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connected to the database 😍'))
    .catch(() => console.log('Cannot connect to the database'));

// LISTEN FOR CHANGES
app.listen(4000, () => console.log('The server is listening...'));
