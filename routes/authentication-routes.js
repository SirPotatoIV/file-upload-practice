// Require our models
const db = require("../models");

// Routes
// =====================
module.exports = function(app){
    app.post("/authentication/login", async function(req,res){
        console.log("authentication get occurred")
    })
    
    // app.post("/api/hamberder", async function(req, res){
    //     console.log("post occurred")

    // })

    // app.put("/api/hamberder/:id", async function(req, res){
    //     console.log("put occurred")
    // })
}