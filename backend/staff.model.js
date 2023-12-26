var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Staff = new Schema({
    SId: { type: Number },
    SName: { type: String },
    Gender: { type: String },
    Contact: { type: String },
    Email: { type: String },
    Address: { type: String },
    StId: { type: Number },
    CtId: { type: Number },
    SUserId: { type: String },
    SUserPass: { type: String },
    SUserpicname: { type: String }
}, {
    collection: 'Staff'
});
module.exports = mongoose.model('Staff', Staff);
