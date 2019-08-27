const express = require('express');
const bcrypt = require('bcryptjs');
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


router.post('/login', (req, res) => {
  let userData = req.body;
  Registration.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send('invalid email')
      } else {
        if (user.password !== userData.password) {
          res.status(401).send('invalid password');
        } else
          res.status(200).send(user);
      }
    }
  });
});

module.exports = router; 

//following code will add the events tese items are hardcoaded but they can be fetched from 
// the database too. 
//  router.get('/events', (req, res)=>{
//    let events = [
//     {"_id" : "3", 
//     "name" :  "auto expo"} ,

//     {"_id" : "4", 
//     "name" :  "auto expo"} 
//   ]
//   res.json.events


//  });

// router.get('/:id', (req, res) => {
//   if (!ObjectId.isValid(req.params.id))
//     return res
//       .status(400)
//       .send(`cannot retrieve the data with the id: ${req.params.id}`);

//   User.findById(req.params.id, (err, doc) => {
//     if (!err) {
//       res.send(doc);
//     } else {
//       console.log(
//         "error in getting the data wit the particular id that you are lookingor" +
//           JSON.stringify(err, undefined, 2)
//       );
//     }
//   });
// });



// router.put('/:id', (req, res) => {
//   if (!ObjectId.isValid(req.params.id))
//     return res
//       .status(400)
//       .send(`could not find the id : ${req.params.id} to update`);

//   var user = {
//     _id: req.body._id,
//     catagory: req.body.catagory,
//     where: req.body.where,
//     amount: req.body.amount
//   };

//   User.findByIdAndUpdate(
//     req.params.id,
//     { $set: user },
//     { new: true },
//     (err, doc) => {
//       if (!err) {
//         res.send(doc);
//       } else {
//         console.log(
//           "error in updating the xpense" + JSON.stringify(err, undefined, 2)
//         );
//       }
//     }
//   );
// });

// router.delete('/:id', (req, res) => {
//   if (!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`cannot delete the item with the id: ${req.params.id}`);

//   User.findByIdAndRemove(req.params.id, (err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       console.log('error in deleting an entry' + JSON.stringify(err, undefined, 2));
//     }
//   });
// });


