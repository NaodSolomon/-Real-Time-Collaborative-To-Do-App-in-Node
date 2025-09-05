// This is my Express setup
const mongoose = require ('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/todoapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const express = require('express');
const app = express();

app.use(express.json());
app.use('/tasks', require('./routes.taskRoutes'));

module.exports = app;