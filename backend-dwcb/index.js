const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 5555;
const uri = process.env.MONGODB_URI;

const app = express();

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);
    return res.status(234).send('Welcome to Dungeon World Character Creator API!')
})

mongoose
    .connect(uri) //, { useNewUrlParser: true, useUnifiedTopology: true }   
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen({port}, () => {
            console.log(`Server is running on  http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });
