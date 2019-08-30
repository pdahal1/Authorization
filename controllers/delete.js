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
//         JSON.stringify(err, undefined, 2)
//       );
//     }
//   });
// });



// router.post('/login', (req, res) => {
//   let userData = req.body;
//   Registration.findOne({ email: userData.email }, (err, user) => {
//     if (err) {
//       console.log(error);
//     } else {
//       if (!user) {
//         res.status(401).send('invalid email');
//       } else {
//         bcrypt.compare(user.password, userData.password)
//         if (user.password == userData.password) {
//           res.status(401).send('invalid password');
//         } else {
//           res.status(200).send(user)
//         }
//       }
//     }
//   }
   
// })

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

// router.post('/login', (req, res) => {
//   try {
//     var user = Registration.findOne({ username: req.body.email }).exec();
//     if (!user) {
//       return response.status(400).send({ message: "the email doesn't exist" });
//     }
//     if (!bcrypt.compareSync(req.body.password, user.password)) {
//       return response.status(400).send({ message: "the password is invalid" });
//     }
//     res.send({ message: "the username and pw combination is correct" });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });