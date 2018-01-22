const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.emit('newMessage', {
        from: 'Vipul',
        text: 'Hi',
        createdAt: 123
    });
    socket.on("createMessage", (message) => {
        console.log("Create it", message);
    });
    socket.on("disconnect", () => {
        console.log('New user disconnected');
    });
});

server.listen(port, () => {
    console.log(`Stated on port ${port}.`);
});

module.exports = { app };