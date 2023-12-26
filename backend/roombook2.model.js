var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var RoomBook2 = new Schema({
    Rmid:{type:Number},
    Rmtype:{type:String},
    Status:{type:String},
}, {
    collection: 'RoomBook2'
});
module.exports = mongoose.model('RoomBook2', RoomBook2);
