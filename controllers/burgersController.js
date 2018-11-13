

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
module.exports = function(app){

  app.get("/api/all", function(req, res) {
    burger.findAll({}).then(function(data) {

      res.json(data);
    });
  });

  
  app.post("/api/new", function(req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    burger.create({
      name: req.body.name,
      devoured: req.body.devoured

    }).then(function(results) {
      res.json(results);
    });
  });
  
  
  app.delete("/api/burger/:id", function(req, res) {
    console.log("Burger ID:");
    console.log(req.params.id);
    burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });

}



