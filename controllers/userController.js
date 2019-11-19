const express = require('express'); 
const router = express.Router(); 
var ObjectId = require('mongoose').Types.ObjectId; 

var { User } = require('../models/user'); 

router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('Error in loading the users' + JSON.stringify(err, undefined, 2));
        }
    });
}); 

router.post('/', (req, res) => {
    var user = new User({
         _id: req.body._id,
        //email: req.body.email, 
        password: req.body.password
        

    }); 
    user.save((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log('errory in posting the user' + JSON.stringify(err, undefined, 2));
        }
    }); 

}); 
module.exports = router; 



// router.get('/:id', (req, res) => {
//   if (!ObjectId.isValid(req.params.id))
//     return res
//       .status(400)
//       .send(`cannot retrieve the data with the id: ${req.params.id}`);

//   Expense.findById(req.params.id, (err, doc) => {
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

//   var exp = {
//     _id: req.body._id,
//     catagory: req.body.catagory,
//     where: req.body.where,
//     amount: req.body.amount
//   };

//   Expense.findByIdAndUpdate(
//     req.params.id,
//     { $set: exp },
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
  
//   Expense.findByIdAndRemove(req.params.id, (err, docs) => {
//     if (!err) {
//       res.send(docs);
//     } else {
//       console.log('error in deleting an entry' + JSON.stringify(err, undefined, 2));
//     }
//   });
// });

// 