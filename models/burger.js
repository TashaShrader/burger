// import orm.js
var orm = require("../config/orm")
// create the code that will call the ORM functions using burger specific input for the ORM.

var burgers = {
    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        })
    },

    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        })
    },
    update: function(colVals, condition, cb){
      orm.update("burgers", colVals, condition, function(res){
       cb(res);   
      })  
    },
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        })
    }
}

module.export = burgers;