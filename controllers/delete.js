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

// this.accountForm = this.fb.group({
//   email: ["", Validators.required],
//   password: ["", Validators.required]
// });

// this.accounxt = this.accView.AccountDetail;

// this.accview.AccountDetail.subscribe(res =>{
//   this.accounxt= res;
//})
// public accountForm: FormGroup;
// public accounxt: any;
//  @Input() public parentData;
// public email: String;
// public pass: String;
// constructor(
//   private authService: AuthService,
//   private router: Router,
//   private route: ActivatedRoute,
//   private fb: FormBuilder,
//   private eventService: EventService,
//   private accView: ViewaccountComponent
// ) {

// }
// findUser() {
//   this.authService.login(this.accountForm.value).subscribe(res => {
//     this.router.navigate(['/viewaccount'])
//   });
// }


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


//follwing is the lazy login api no bcrypt.compare. 

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

//router.post('/viewAccount', async (request, response) => {
    //   try {
    //       var user = await Registration.findOne( {email: request.body.email }).exec();
    //       if(!user) {
    //           return response.status(400).send({message: "The username does not exist" });
    //       }
    //       if(!bcrypt.compareSync(request.body.password, user.password)) {
    //           return response.status(400).send( {message:"The password is invalid" } );
    //       }else{
    //       // let payload = {subject: user._id}
    //       // let token = jwt.sign(payload, 'secretkey')
    //       response.status(200).send({response}) };
          
    //   } catch (error) {
    //       response.status(500).send(error);
    //   }
    // });
    
    
    
    // router.post('/account', async (request, response) => {
    //   try {
    //       var user = await Registration.findOne( {email: request.body.email }).exec();
    //       if(!user) {
    //           return response.status(400).send({message: "The username does not exist" });
    //       }
    //       if(!bcrypt.compareSync(request.body.password, user.password)) {
    //           return response.status(400).send( {message:"The password is invalid" } );
    //       }else{
    //            // response.status(200).send({message:"good"}) };
    //             response.status(200).send({user}) };
    //   } catch (error) {
    //       response.status(500).send(error);
    //   }
    // });
    

    // router.get('/:id', (req, res)=>{
//   if(!ObjectId.isValid(req.params.id))
//   return res
//   .status(400)
//   .send(`cannot find the data with id: ${req.params.id}`);

//   Registration.findById(req.params.id, (err, doc)=>{
//     if(!err){
//       res.send(doc);
//     }else{
//      console.log( "error in getting the data " 
//      + JSON.stringify(err, undefined, 2))
//     }
//   });
  
  
// });


// router.get("/account", (req, res) => {
//   try {
//     let userData = req.body;
//     Registration.findOne({ email: userData.email }, (error, user) => {
//       if (error) {
//         console.log(error);
//       } else {
//         if (!user) {
//           res.status(401).send("invalid email");
//         } else {
//           if (!bcrypt.compareSync(req.body.password, user.password)) {
//             res.status(401).send("invalid password");
//           } else {
//             res.status(200).send(user);
//           }
//         }
//       }
//     });
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// router.get('/account', (req, res)=>{
//   let userData = req.body;
//   Registration.findOne({email:userData.email}, (err, doc)=>{
//     if(err){
//       console.log(err);
//     }else{
//       if(!doc){
//         res.status(401).send("invalid email");
//       }else{
//         if(!bcrypt.compareSync( Registration.password,userData.password)){
//           res.status(200).send(doc);
//         }
//       }
//     }
//   })
// }); 

//  router.get("/account",  (req, res) => {
//     try {
//       let userData = req.body;
//       Registration.findOne({ email: userData.email }, (error, user) => {
//         if (error) {
//           console.log(error);
//         } else {
//           if (!user) {
//             res.status(401).send("invalid email");
//           } else {
//             if (!bcrypt.compareSync(req.body.password, user.password)) {
//               res.status(401).send("invalid password");
//             } else {
//               res.status(200).send(user);
//             }
//           }
//         }
//       });
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

// router.get("/account", async (request, response) => {
//   try {
//      await Registration.findOne(
//       { email: request.body.email },
//       (err, user) => {
//         if (err) {
//           console.log(err);
//         } else {
//           if (!user) {
//             return response
//               .status(400)
//               .send({ message: "The username does not exist" });
//           } else {
//             if (!bcrypt.compareSync(request.body.password, user.password)) {
//               return response
//                 .status(400)
//                 .send({ message: "The password is invalid" });
//             } else {
//               // let payload = { subject: user._id };
//               // let token = jwt.sign(payload, "secretkey");
//               response.status(200).send(user);
//             }
//           }
//         }
//       }
//     );
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

// router.post("/account", async (request, response) => {
//     try {
//         var user = await Registration.findOne( {email: request.body.email }, (err, doc) =>{}).exec();
//         if(!user) {
//             return response.status(400).send({message: "The username does not exist" });
//         }
//         if(!bcrypt.compareSync(request.body.password, user.password)) {
//             return response.status(400).send( {message:"The password is invalid" } );
//         }else{
//              // response.status(200).send({message:"good"}) };
//               // response.status(200).send({user}) 
//               response.send(doc);
//             };
//     } catch (error) {
//         response.status(500).send(error);
//     }
//   });

// router.post("/account", async (request, response) => {
//     try {
//         var user = await Registration.findOne( {email: request.body.email };
//         if(!user) {
//             return response.status(400).send({message: "The username does not exist" });
//         }
//         if(!bcrypt.compare(request.body.password, user.password)) {
//             return response.status(400).send( {message:"The password is invalid" } );
//         }else{
//              // response.status(200).send({message:"good"}) };
//               response.status(200).send({user}) };
//     } catch (error) {
//         response.status(500).send(error);
//     }
//   });

// router.get('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//       return res
//         .status(400)
//         .send(`cannot retrieve the data with the id: ${req.params.id}`);
  
//     Expense.findById(req.params.id, (err, doc) => {
//       if (!err) {
//         res.send(doc);
//       } else {
//         console.log(
//           "error in getting the data wit the particular id that you are lookingor" +
//             JSON.stringify(err, undefined, 2)
//         );
//       }
//     });
//   });