var productsRouter = require('express').Router(); 
const productsModel = require("../models/products.model");
productsRouter.get("/products", async (request, response) => {
    const users = await productsModel.find({});
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
});

productsRouter.get("/",  (req, res) => {
    res.send("No Matching Found");
});

module.exports = productsRouter;