// Require our models
const db = require("../models");

// Routes
// =====================
module.exports = function(app){

    app.post("/api/Images", async function(req, res){
        console.log("post occurred")
        db.Images.create({
            image_string: req.body.image_string,
        }).then(function(dbString) {
          // We have access to the new todo as an argument inside of the callback function
          res.json(dbString);
        })
          .catch(function(err) {
          // Whenever a validation or flag fails, an error is thrown
          // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
          });

    })

}