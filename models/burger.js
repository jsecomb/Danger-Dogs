var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(column1, column2, value1, value2, cb) {
      orm.insertOne("burgers", column1, column2, value1, value2, function(res) {
        cb(res);
      });
    },
    updateOne: function(column1, value1, column2, value2, rowId, cb) {
      orm.updateOne("burgers", column1, value1, column2, value2, rowId, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;