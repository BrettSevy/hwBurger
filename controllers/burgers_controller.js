const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    // console.log("select * from burgers");
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger", "eaten"
    ], [
      req.body.burger, req.body.eaten
    ], function(result) {
        // console.log("select * from burgers");
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      eaten: req.body.eaten
    }, condition, function(result) {
      if (result.changedRows == 0) {
      
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
    
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  module.exports = router;