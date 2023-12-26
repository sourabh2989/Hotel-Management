var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var RoomBook = new Schema({
    FName:{type:String},
    LName:{type:String},
    Address:{type:String},
    CtId:{type:Number},
    StId:{type:Number},
    Zip:{type:Number},
    Phone:{type:String},
    Email:{type:String},
    ChkInDate:{type:String},
    ChkInTime:{type:String},
    ChkOutDate:{type:String},
    ChkOutTime:{type:String},
    Aadharno:{type:Number},
    rmid:{type:Number},
    rmtype:{type:String},
    NoAdult:{type:Number},
    NoChild:{type:Number}
}, {
    collection: 'RoomBook'
});
module.exports = mongoose.model('RoomBook', RoomBook);
