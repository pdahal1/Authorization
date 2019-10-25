const express = require('express'); 
const router = express.Router(); 
var ObjectId = require('mongoose').Types.ObjectId; 

var { Entries } = require('../models/entry'); 

router.get('/', (req, res) => {
    Entries.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in loading the users' + JSON.stringify(err, undefined, 2));
        }
    });
}); 

router.post('/', (req, res) => {
    var ent = new Entries({
        heading: req.body.Heading,
        details: req.body.details,
        phone: req.body.phone,
        email: req.body.email

       

    }); 
    ent.save((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('error in posting the user' + JSON.stringify(err, undefined, 2));
        }
    }); 

}); 
module.exports = router; 



