const mongoose = require( 'mongoose'); 
var User = mongoose.model('users', {
   // email: {type: String}, 
    password: {type: String}
}); 

module.exports = {User}; 