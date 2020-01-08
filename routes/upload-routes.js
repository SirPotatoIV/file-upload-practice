// Require our models
const db = require("../models");
const image2base64 = require('image-to-base64');

// Routes
// =====================
module.exports = function(app){
    app.get("/upload/file", async function(req,res){
        
    })
    
    app.post("/upload/file", async function(req, res){
        console.log("file recieved: ", req)
        
        // image2base64(req.body.file) // you can also to use url
        //     .then(
        //         (response) => {
        //             console.log(response); //cGF0aC90by9maWxlLmpwZw==
        //         }
        //     )
        //     .catch(
        //         (error) => {
        //             console.log(error); //Exepection error....
        //         }
        //     )
    })

    app.put("/upload/file", async function(req, res){
        console.log("put occurred")
    })
}