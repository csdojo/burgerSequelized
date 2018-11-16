 

//====================================================
// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
module.exports = function(sequelize, DataTypes) {
// Creates a "Burger" model that matches up with DB
var Burger = sequelize.define("burger", {
  name: DataTypes.STRING,
  devoured :{
    type:DataTypes.BOOLEAN,
    defaultValue: false
  }
});

// Syncs with DB
Burger.sync({force:true});

// Makes the Burger Model available for other files (will also create a table)
return Burger;
}