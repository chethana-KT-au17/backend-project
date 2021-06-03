const User = require('./User.js');
const Event = require('./events.model.js');
const Join = require('./Join.js');
const Donation = require('./donation.js');
const mongoose = require('mongoose');
const Contact = require('./contact.model.js')

function connect(){
    return mongoose.connect('mongodb+srv://nithya-admin:pass@123@cluster0.vzmsb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser: true
    });
}
 module.exports ={
     models:{
         user: User,
         event: Event,
         join: Join,
         donation: Donation,
         contact: Contact
    },
    connect: connect
};