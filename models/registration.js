const mongoose = require('mongoose'); 
var Registration = mongoose.model('registrations', {
    firstName: {type: String}, 
    lastName: {type: String}, 
    phone: {type: String}, 
    email: {type: String, unique:true},
    password: {type: String}
}); 

module.exports = {Registration}; 