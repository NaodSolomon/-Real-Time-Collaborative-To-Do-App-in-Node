//My node file

const http = require('http');
const app = require('./app');
const { initSocket } = require('./sockets/socket');

const server = http.createserver(app);
initSocket(server);

server.listen(4000, () => console.log('Server running on port 4000'));
