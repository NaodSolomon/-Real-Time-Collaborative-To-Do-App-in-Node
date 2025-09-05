const Task = require ('../models/Task');

exports.getTasks = async (req,res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

exports.createTask = async(req,res) => {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
};

exports.updateTask = async(req,res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(task);
};

exports.deleteTask = async (req,res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).end();
};

const { emitTaskUpdate } = require('../sockets/socket');

exports.createTask = async (req,res) => {
    const task = new Task(req.body);
    await task.save();
    emitTaskUpdate(task); //notify all clients
    res.status(201).json(task);
};

exports.updateTasl = async (req,res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    emitTaskUpdate(task);
    res.json(task);
};

const { sendWebhook } = require( "../utils/webhook");

exports.createTask = async (req,res) => {
    const task = new Task(req.body);
    await task.save();
    emitTaskUpdate(task);
    await sendWebhook('task_created', task);
    res.status(201).json(task);
}