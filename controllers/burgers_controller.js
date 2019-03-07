// import express and burger.js
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burger");
//create a router for the app

router.get("/", function (req, res) {
  burgers.all(function (data) {
    const hasBurgers = {
      burgers: data
    };
    res.json(hasBurgers);
  });
});

router.post("/api/burgers", function(req,res){
  burgers.create([
  "burger_name", "devoured"
],
  [
    req.body.burger_name, req.body.devoured
  ],
  [
    function (dbResult) {
      res.json(dbResult)
    }
  ])

})

router.put("/api/burgers/:id", function (req, res) {

  var condition = "id = " + req.perams.id;
  burgers.update({
    id: req.body.id
  },
    condition, function (dbResult) {
      if (changedRows == 0) {
        return res.status(404).end();
      } else {
      res.json(dbResult);
      }
    })
})





router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
})

module.exports = router;

