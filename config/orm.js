var connection = require("./connection");


var orm = {

    all: function (table) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, table, function (err, dbResult) {
            if (err) {
                throw err;
            };
            res.json(dbResult);
        });

    },

    create: function (req, res) {
        var queryString = "INSERT INTO burgers (burger_name) VALUE ?";
        connection.query(queryString, (req.params.burger_name), function (err, dbResults) {
            if (err) {
                throw err;
            };
            res.json(dbResult);
        })
    },





    update: function (req, res) {
        var queryString = "UPDATE burgers WHERE devoured= ?"
        connection.query(queryString, req.params.devoured, function (err, dbResult) {
            if (err) {
                throw err;
            };
            res.json(dbResult);

        });
    },

    delete: function (req, res) {
        var queryString = "DELETE FROM burgers WHERE id = ?";
        connection.query(queryString, req.params.id, function (err, dbResult) {
            if (err) {
                throw err;
            };
            res.json(dbResult);
        })
    }

}

module.exports = orm;

