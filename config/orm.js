var connection = require("./connection.js");

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += "?";
    queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
    });
  },
  updateOne: function(table, column1, value1, column2, value2, rowId, cb) {
    var queryString = "UPDATE ?? SET ?? = ?, ?? = ? WHERE rowId = ?";
    connection.query(queryString, [table, column1, value1, column2, value2, rowId], function(err, result) {
        if (err) throw err;
        console.log(result);
        cb(result);
      }
    );
  }
};

module.exports = orm;
