 

//====================================================
// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("burger", {
  name: Sequelize.STRING,
  devoured :{
    type:Sequelize.BOOLEAN,
    defaultValue: false
  }
});

// Syncs with DB
Burger.sync({force:true});

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;

