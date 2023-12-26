var mongoose=require("mongoose");
const Schema =mongoose.Schema;
var City =new Schema({
    CtId:{type:Number},
    CtName:{type:String},
    StId:{type:Number},
    
},
{Collection:"City"}
);
module.exports=mongoose.model("City",City);