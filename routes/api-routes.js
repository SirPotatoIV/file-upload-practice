// Require our models
const db = require("../models");

// Routes
// =====================
module.exports = function(app){
    app.get("/api/hamberder", async function(req,res){
        console.log("get occurred")
    })
    
    app.post("/api/hamberder", async function(req, res){
        console.log("post occurred")

    })

    app.put("/api/hamberder/:id", async function(req, res){
        console.log("put occurred")
    })
}