const express = require ("express"); 
var router = express.Router(); 
var ObjectId= require("mongoose").Types.ObjectId; 
var {Listing }= require ("../models/listing"); 

router.post("/", (req, res)=>{
var listing = new Listing({
    category:  req.body.firstName, 
    heading: req.body.heading, 
    description: req.body.description, 
    email: req.body.email
}); 

listing.save((err, doc)=>{
    if(err){
        console.log(
            "error in saving the  listing" + JSON.stringify(err, undefined, 2)
        ); 

    }else{
        res.status(200).send({Message: " you are regesterd"}); 
    }
}); 
});

router.get("/", (req, res)=>{
    Listing.find((err, doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error'+ JSON.stringify(err, undefined, 2))
        }
    }); 
}); 

module.exports = router;