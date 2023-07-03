// serverı buraya yazın ve index.js require yazın

const express = require("express");
const server = express();

const projectsRouter = require("./project/router");
const resourcesRouter = require("./resource/router");
const tasksRouter = require("./task/router");

server.use(express.json());

server.get("/",(req,res) => {
    res.send("<h2> App is running </h2>")
})

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);
server.use("/api/tasks", tasksRouter);



module.exports = server;