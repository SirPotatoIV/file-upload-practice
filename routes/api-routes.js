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
          res.json(dbString);
        })
          .catch(function(err) {
          // Whenever a validation or flag fails, an error is thrown
          // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
          });

    })
    app.post("/api/articles", async function(req, res){
      const {user_id, title, text, image_string} = req.body

      db.Articles.create({
          user_id,
          title,
          text,
          image_string})
        .then(function(response) {
          res.json(response);
        })
        .catch(function(err) {
          console.log(err)
          res.json(err);
        });

  })

}