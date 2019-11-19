const mongoose = require('mongoose');
var Registration = mongoose.model('registrations', {
    _id:{ type: String},
    firstName: {type: String},
    lastName: {type: String},
    phone: {type: String},
    //email: {type: String},
    password: {type: String},

});


module.exports = {Registration};


