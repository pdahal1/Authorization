const mongoose = require('mongoose'); 
var Listing = mongoose.model( 'listings', {
    
    category: {type:String},
    heading: {type:String},
    description: {type:String},
    //email: {type:String},

}); 
module.exports = {Listing}; 