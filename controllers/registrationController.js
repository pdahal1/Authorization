const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport-local');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken'); 

var { Registration } = require('../models/registration');

router.get('/', (req, res) => {
  Registration.find((err, doc) => {
    if (!err) {
      `Error in Retrieving the employee` + JSON.stringify(err, undefined, 2)
      res.send(doc);
    } else {
      console.log(
        `Error in Retrieving the employee` + JSON.stringify(err, undefined, 2)
      );
    }
  });
});



router.post('/', (req, res) => {
  var reg = new Registration({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password
  });

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(reg.password, salt, function (err, hash) {
      if (err) {
        console.log(err);
      }
      reg.password = hash;
      reg.save((err, doc) => {
        if (err) {
          console.log('error in saving the user object' + JSON.stringify(err, undefined, 2));
           
        } else {
          // let payload = {subject: reg._id}
          // let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({Message: "you are registered"});
        }
      });
    });
  });
});

router.post('/login', async (request, response) => {
  try {
      var user = await Registration.findOne( {email: request.body.email }).exec();
      if(!user) {
          return response.status(400).send({message: "The username does not exist" });
      }
      if(!bcrypt.compareSync(request.body.password, user.password)) {
          return response.status(400).send( {message:"The password is invalid" } );
      }else{
      let payload = {subject: user._id}
      let token = jwt.sign(payload, 'secretkey')
      response.status(200).send({token}) };
  } catch (error) {
      response.status(500).send(error);
  }
});





module.exports = router;








