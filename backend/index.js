require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const { HoldingsModel } = require('./model/HoldingsModel');

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app=express();



app.listen(3002, () => {
    console.log('Server is running on port 3002');
    mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB');
});

