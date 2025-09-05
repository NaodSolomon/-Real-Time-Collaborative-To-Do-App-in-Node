const { Server } = require('socket.io');

let io;

function initSocket(server){
    io = new Server(server, {cors: {origin: "*"}});

    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);
        
        socket.on('taskUpdated', (task) => {
            socket.broadcast.emit('taskUpdated', task);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });
    });
}

function emitTaskUpdate(task){
    if (io) {
        io.emit('taskUpdated', task);
    }
}

module.exports = {initSocket, emitTaskUpdate };