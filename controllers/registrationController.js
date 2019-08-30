const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport-local');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Registration } = require('../models/registration');

router.get('/', (req, res) => {
  Registration.find((err, doc) => {
    if (!err) {
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
        if (!err) {
          res.send(doc);
        } else {
          console.log('error in saving the user object' + JSON.stringify(err, undefined, 2));
        }
      });
    });
  });
});

router.post("/login", async (request, response) => {
  try {
      var user = await Registration.findOne({ email: request.body.email }).exec();
      if(!user) {
          return response.status(400).send({ message: "The username does not exist" });
      }
      if(!bcrypt.compareSync(request.body.password, user.password)) {
          return response.status(400).send({ message: "The password is invalid" });
      }
      response.send({ message: "The username and password combination is correct!" });
  } catch (error) {
      response.status(500).send(error);
  }
});

// router.post('/login', (req, res) => {
//   let userData = req.body;
//   Registration.findOne({ email: userData.email }, (err, user) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send
//     } else {
//       if (!user) {
//        return res.status(401).send('invalid email')
//       } else {
        
//         if (Registration.password !== bcrypt.compare(userData.password)) {
//           res.status(401).send('invalid password');
//         } else
//           res.status(200).send(user);
//       }
//     }
//   });
// });

module.exports = router;








