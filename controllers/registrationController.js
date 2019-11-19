const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport-local");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;
const jwt = require("jsonwebtoken");

var { Registration } = require("../models/registration");

//===================================================================
// following is the code to verify the token at the backend
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("unAuthorized request");
  }
  let token = req.headers.authorization.split("")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized request");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("Unauthorized req");
  }
  req.userId = payload.subject;
  next();
}
//===================================================================
router.get("/", (req, res) => {
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



router.post("/", (req, res) => {
  var reg = new Registration({
     _id: req.body._id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    //email: req.body.cd auth ,
    password: req.body.password
  });

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(reg.password, salt, function(err, hash) {
      if (err) {
        console.log(err); 
      }
      reg.password = hash;
      reg.save((err, doc) => {
        if (err) {
          console.log(
            "error in saving the user object" +
              JSON.stringify(err, undefined, 2)
          );
        } else {
          // let payload = {subject: reg._id}
          // let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({ Message: "you are registered" });
        }
      });
    });
  });
});

router.post("/login", async (request, response) => {
  try {
    var user = await Registration.findOne({ _id: request.body._id }).exec();
    if (!user) {
      return response
        .status(400)
        .send({ message: "The username does not exist" });
    }
    if (!bcrypt.compareSync(request.body.password, user.password)) {
      return response.status(400).send({ message: "The password is invalid" });
    } else {
      let payload = { subject: user._id };
      let token = jwt.sign(payload, "secretkey");
      response.status(200).send({ token });
    }
  } catch (error) {
    response.status(500).send(error);
  }
});

router.get("/:id", (req, res) => {
  // if (!ObjectId.isValid(req.params.id))
  //   return res
  //     .status(400)
  //     .send(`cannot retrieve the data with the id: ${req.params.id}`);

  Registration.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "error in getting the data wit the particular id that you are lookingor" +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});



router.post("/account", async (request, response) => {
      try {
          var user = await Registration.findOne( {email: request.body.email })
          if(!user) {
              return response.status(400).send({message: "The username does not exist" });
          }
          if(!bcrypt.compare(request.body.password, user.password)) {
              return response.status(400).send( {message:"The password is invalid" } );
          }else{
               // response.status(200).send({message:"good"}) };
                response.status(200).send(user) };
      } catch (error) {
          response.status(500).send(error);
      }
    });

// router.get("/account", async (request, response) => {
//   try {
//       var user = await Registration.findOne( {email: request.body.email })
//       if(!user) {
//           return response.status(400).send({message: "The username does not exist" });
//       }
//       if(!bcrypt.compare(request.body.password, user.password)) {
//           return response.status(400).send( {message:"The password is invalid" } );
//       }else{
//            // response.status(200).send({message:"good"}) };
//             // response.status(200).send(user) 
//           Registration.findOne(request.params.email, (err, doc)=>{
//             if(!err){
//               res.send(doc); 
//             }else{
//               console.log("error" + JSON.stringify(err, undefined, 2)); 
//             }
//           }); 
          
//           };
//   } catch (error) {
//       response.status(500).send(error);
//   }
// });

module.exports = router;
