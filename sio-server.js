var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app).listen(8081);
var io = require("socket.io")(server);

app.use(express.static("./public"));

io.on("connection", function(socket) {

    socket.on("chat", function(message) {
    	socket.broadcast.emit("message", message);
    });

	socket.emit("message", "Welcome to Cyber Chat");

});

console.log("Starting Socket App - http://harshit-srivastava.appspot.com:8081");