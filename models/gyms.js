const orm = require("../config/orm");

const gym = {
  all: function(cb) {
    orm.selectAll("gyms", function(res) { cb(res); });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("gyms", cols, vals, function(res) { cb(res); });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("gyms", objColVals, condition, function(res) { cb(res); });
  },
  delete: function(condition, cb) {
    orm.deleteOne("gym", condition, function(res) { cb(res); });
  }
};

// Export the database functions for the controller (gym_controller.js).
module.exports = gym;