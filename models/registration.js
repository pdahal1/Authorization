const mongoose = require('mongoose');
var Registration = mongoose.model('registrations', {
     
    firstName: {type: String},
    lastName: {type: String},
    phone: {type: String},
    email: {unique:true,type: String},
    password: {type: String},

});


module.exports = {Registration};


