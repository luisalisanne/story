const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors())

const {DB_USER, DB_HOST, DB_NAME, DB_PASS, PORT} = process.env;

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connected to the database 😍'))
    .catch(() => console.log('Can not connect to the database'));

app.listen(PORT, () => console.log('The server is listening...'));
