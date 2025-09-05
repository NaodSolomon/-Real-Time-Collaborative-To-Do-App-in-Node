const request = require('supertest');
const app = require ('../src/app');
const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo_test');
});

afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
})

test("Create a task", async () => {
    const res = await request(app)
        .post('/tasks')
        .send({title: "Test Task", owner: "user1"});

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Task");
});