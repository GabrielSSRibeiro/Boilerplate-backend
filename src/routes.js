const { Router } = require("express");
const routes = Router();

const myController = require("./controllers/myController");

routes.get("/home", myController.index);
routes.post("/home", myController.store);

module.exports = routes;
