const express = require('express');
const routes = express.Router();

const TaskController = require('./controllers/TaskController')

routes.get("/tasks", TaskController.index);
routes.get("/show/task/:id", TaskController.show);
routes.post("/new/task", TaskController.create);
routes.put("/update/task/:id", TaskController.update);
routes.delete("/delete/task/:id", TaskController.delete);

module.exports = routes;