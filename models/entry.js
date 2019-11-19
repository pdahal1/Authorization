const mongoose = require('mongoose');
var Entries = mongoose.model('entries', {
    heading: {type: String},
    details: {type:String},
    phone: {type:String},
    //email: {type: String}
  

});


module.exports = {Entries};


