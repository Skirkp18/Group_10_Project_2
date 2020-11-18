const orm = require("../config/orm");

 module.exports= function (sequelize, DataTypes) {
  const gym = sequelize.define("gym", 
  {
    all: function(cb) {
    orm.selectAll("gym", function(res) { cb(res); });
  }, 
    create: function(cols, vals, cb) {
    orm.create("gym", cols, vals, function(res) { cb(res); });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("gym", objColVals, condition, function(res) { cb(res); });
  },
  delete: function(condition, cb) {
    orm.deleteOne("gym", condition, function(res) { cb(res); });
  }
  })
  };
