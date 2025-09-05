//Task models
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    completed: { type: Boolean, default: false},
    owner: { type: String, required: true}, //user ID or email
}, {timestamps: true});

module.exports = mongoose.model('Task', taskSchema);