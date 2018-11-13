

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
module.exports = function(app){

  app.get("/api/all", function(req, res) {
    burger.findAll({}).then(function(data) {

      res.json(data);
    });
  });
  
  app.post("/api/burgers", function(req, res) {
    burger.create([
      "name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  app.post("/api/new", function(req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    Burger.create({
      name: req.body.name,
      devoured: req.body.devoured

    }).then(function(results) {
      res.json(results);
    });
  });
  
  
  app.delete("/api/burger/:id", function(req, res) {
    console.log("Burger ID:");
    console.log(req.params.id);
    Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });

}



