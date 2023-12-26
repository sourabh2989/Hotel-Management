var mongoose =require("mongoose");
const Schema=mongoose.Schema;
var RoomTypes=new Schema({
    roomTypeId:{type:String},
    roomTypeName:{type:String},
    roomCharges:{type:Number}
},
{
    collection:"RoomTypes"
}
);
module.exports=mongoose.model("RoomTypes",RoomTypes);