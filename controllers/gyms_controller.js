const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const gym = require("../models/gym.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  gym.all(function(data) {
    let hbsObject = {
      gyms: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/gyms", function(req, res) {
  burger.create(["gym_name"], [req.body.gym_name],
    function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
  });
});

router.put("/api/gyms/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  gym.update({ devoured: true }, condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } 
      else {
        res.status(200).end();
      };
    }
  );
});

router.delete("/api/gyms/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  gym.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } 
    else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
